import React, { useState } from 'react';
import logo from 'assets/imgs/logos/logo.png';
import './Header.scss';
import Modal from '../common/Modal';

const Header = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(prev => !prev);
	};
	return (
		<>
		<header className='header'>
			<div className='header-left'>
				<img src={logo} alt='logo' />
			</div>
			<div className='header-right'>
				<select>
					<option value="100">$100</option>
				</select>
				<button className='btn-wallet' onClick={handleOpenModal}>Select Wallet</button>
			</div>
		</header>
			{openModal && <Modal open={openModal} onClose={setOpenModal}/>}
		</>
	);
};

export default Header;