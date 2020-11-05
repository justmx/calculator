import React from 'react';

const HistroyPanel = ({records = [], clearAll}) => {
	return (
		<div className='histrory-container'>
  			<div className='histrory-container-header'>
  				<h3>History</h3>
  				<button className='clear-button' onClick={() => clearAll()}> Clear All History </button>
  			</div>
  			<div className='histrory-container-inner'>
  				{
  					records.map((list, i) => {
  						return (<p className='record-item' key={i}>{list.replace('*','x')}</p>)
  					})
  				}
  			</div>  		
  		</div>
	)
}

export default HistroyPanel;
