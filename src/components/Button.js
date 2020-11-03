import React from 'react';

const Button = ({content, onClick, left}) => {	
	const containStyle = left ? ['circle-holder-left'] : ['circle-holder-right'];
	const style = ['circle'];
	if(content.double){
		style.push('double');
		containStyle.push('double')
	}

	return (
		<div onClick={() => onClick(content.content)} className={containStyle.join(' ')} >
			<div className={style.join(' ')} 
				style={{background: content.colour || '#363636'}}>{content.content}</div>
		</div>
	)
}

export default Button;