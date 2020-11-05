import React, { useState } from 'react';
import HistroyPanel from "../components/HistroyPanel";
import KeyPanel from "../components/KeyPanel";
import {left_data , right_data} from '../utitls/data';

const Calculator = ({removeAllHistory, addHistoryRecord, histroyRecords}) => {

  const [equation, setEquation] = useState('');
  const [result, setResult] = useState(0)
  const [next, setNext] = useState(0)

  const clear = () => {
    setEquation('');
    setResult(0);
    setNext(0);
  }

  const clearAll = () => {
    clear();
    removeAllHistory();
  }

  const onClick = value => {
    let newResult = 0,
      newEquation = equation,
      newNext = next;
    
    if (value === 'C') 	{
    	return clear();
    } else if ((value >= '0' && value <= '9') || value === '.') {
    		newEquation += value;
    		if(next === 0){
    			newNext = value;
    		} else {
    			newNext += value;
    		}
    } else if (value === "+/-") {
	    if (next !== 0) {
	    	newNext = -1 * parseFloat(next);
	    }
	    newEquation = equation.replace(/(\d+)(?!.*\d)/g, `(${next})`);
  	} else if (['+', '-', 'x', '/', '%'].indexOf(value) !== -1) {
  		if(value === 'x') {
  			newEquation += ' * ';
  		} else {
  			newEquation += ' ' + value + ' ';
  		}
     	newNext = 0;
    } else if (value === '=') {
      // eslint-disable-next-line
      const evalResult = eval(equation);
      newResult = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
      const equation_list = `${equation} = ${newResult}`;
      addHistoryRecord(equation_list);
      newEquation = '';
      newNext = 0;
    } else {
      newEquation = equation.trim();
      newEquation = equation.substr(0, equation.length - 1);
    }

    setEquation(newEquation);
    setResult(newResult);
    setNext(newNext);
  }
	
  return (
      <div className='calculator-container'>
          <KeyPanel 
            onClick={onClick}
            content={next !== 0 ? next : result}
            left_data={left_data}
            right_data={right_data}
          />
          <HistroyPanel 
            records={histroyRecords} 
            clearAll={clearAll}
          />
      </div>
  );
}

export default Calculator;