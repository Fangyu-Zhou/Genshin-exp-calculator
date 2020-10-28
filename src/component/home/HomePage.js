import React from 'react'
import DialpadIcon from '@material-ui/icons/Dialpad';
import Modal from '@material-ui/core/Modal';

import './HomePage.css'

const HomePage = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ul className="cb-slideshow">
                <li><span>Image 01</span></li>
                <li><span>Image 02</span></li>
                <li><span>Image 03</span></li>
                <li><span>Image 04</span></li>
                <li><span>Image 05</span></li>
                <li><span>Image 06</span></li>
            </ul>
            <div className={`calculator-container`}>
                <DialpadIcon onClick={() => handleOpen()}/>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>Test</div>
            </Modal>
        </div>
    )
}

export default HomePage;