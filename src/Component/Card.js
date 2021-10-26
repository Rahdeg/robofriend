import React from 'react';

const Card = ({name,email,id}) => {
	return (
		<div className='tc bg-purple dib br3 pa3 ma2 grow'>
		<img alt='pictures' src={`https://robohash.org/${id}?200x200`}/>
		<div>
		<h1>{name}</h1>
		<p>{email}</p>
		</div>
		</div>
        );
}

export default Card;