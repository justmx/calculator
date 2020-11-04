import React from 'react';
import { connect } from 'react-redux';
import HistroyPanel from "../components/HistroyPanel";
import KeyPanel from "../components/KeyPanel";
import {
	removeAllHistory,
	addHistoryRecord,
  initHistory
} from '../actions/init';

class Calculator extends React.Component {
  state = {
    equation: '',
    result: 0,
    next: 0
  }

  clear() {
    this.setState({equation: '', result: 0, next: 0});
  }

  componentDidMount() {
    this.props.initHistory();
  }

  onClick = value => {
    let {equation, result, next} = this.state;
    const {addHistoryRecord} = this.props;
    result = 0;
    if (value === 'C') 	{
    	return this.clear()
    } else if ((value >= '0' && value <= '9') || value === '.') {
    		equation += value;
    		if(next === 0){
    			next = value;
    		} else {
    			next += value;
    		}
    } else if (value === "+/-") {
    	console.log(equation)
	    if (next !== 0) {
	    	next = -1 * parseFloat(next);
	    }
	    console.log(next)
	    equation = equation.replace(/(\d+)(?!.*\d)/g, `(${next})`);
	    // equation += next;
	    console.log(equation)
  	} else if (['+', '-', 'x', '/', '%'].indexOf(value) !== -1) {
  		if(value === 'x') {
  			equation += ' * ';
  		} else {
  			equation += ' ' + value + ' ';
  		}
     	next = 0;
    } else if (value === '=') {
      try {
        // console.log(equation)
        // eslint-disable-next-line
        const evalResult = eval(equation);
        result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
        next = 0;
        const equation_list = `${equation} = ${result}`; 
        // console.log(equation_list);
        addHistoryRecord(equation_list);
        equation = '';
      } catch (error) {
        alert('Invalid Mathematical Equation');
      }
    } else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
    }
                
    this.setState({equation, result, next});
  }
	
  render() {
  	const {result, next} = this.state;
    const {histroy_records, removeAllHistory} = this.props;
    return (
		<div className="home">
		  <div className='home-inner'>
          <KeyPanel 
            onClick={this.onClick}
            content={next !== 0 ? next : result}
          />
          <HistroyPanel 
            records={histroy_records} 
            clearAll={removeAllHistory}
          />
      </div>
		</div>
	);
  }
}

const mapStateToProps = ({ init }) => ({
	histroy_records: init.histroy_records
});

const mapDispatchToProps = {
	removeAllHistory,
	addHistoryRecord,
  initHistory
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Calculator);
