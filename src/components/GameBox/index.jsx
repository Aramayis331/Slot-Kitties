import Slot from 'components/slot';
import React from 'react';
import './GameBox.scss';

const GameBox = () => {
	return (
		<div className='game-box'>
			<Slot />
		</div>
	);
};

export default GameBox;