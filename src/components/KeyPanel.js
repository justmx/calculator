import React from 'react';
import Button from "./Button";

const KeyPanel = ({onClick, content, left_data, right_data}) => {
  return (
     <div className='calculator'>
        <div className='display'>
          {content}
        </div>
        <div className='calculator-container'>
            <div className='flex-row-between left'>
              {
                left_data.map((item, i) => {
                  return <Button content={{content: item}} onClick={onClick} key={i} left />
                })
              }
            </div>
            <div className='flex-row-between right'>
              {
                right_data.map((item, i) => {
                  return (<Button content={item} onClick={onClick} key={i}/>)
                })
              }
            </div>
          </div>
    </div>
  )
}

export default KeyPanel;
