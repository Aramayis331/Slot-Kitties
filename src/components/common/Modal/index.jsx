import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as Close } from 'assets/imgs/icons/close.svg';
import './Modal.scss';

const Modal = ({ open, onClose}) => {

	const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && open) {
				onClose();
			}
		},
		[open, onClose]
	);

	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		return () => document.removeEventListener('keydown', keyPress);
	}, [keyPress]);

	return ReactDOM.createPortal(
		<>
			{open ? (
				<div className='modal'>
					<div className='modal-header'>
						<div
							className='modal-header__close'
							onClick={() => onClose()}
						>
							<Close />
						</div>
					</div>
					<div className='modal-body'>
						<h3>You'll need a wallet on Solana to continue</h3>
					</div>
					<div className='modal-footer'>

					</div>
					<div></div>
					<div></div>
				</div>
			): null}
		</>,
		document.getElementById('portal')
	)
};

export default Modal;