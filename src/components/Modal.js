import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../UI/Button';
import classes from './Modal.module.css';

const Modal = (props) => {

const closeModal = () => {
props.open(false)
}

return ReactDOM.createPortal(
    <React.Fragment>
        <div className={classes.overlay}/>
            <div className={classes.modal}>{props.children}
            <Button type="button" onClick={closeModal}>Close</Button>
        </div>
    </React.Fragment>,
    document.getElementById('modal')
)
}

export default Modal;