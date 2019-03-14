import React from 'react';
import ReactDOM from 'react-dom';



const Modal = props => {
    return ReactDOM.createPortal(
        //get navigation from contacts
        <div onClick={props.toProducts}>
            {/* // get actions */}
            {props.actions}
            {props.content}
        </div>,

        //idedam kaip sibling to root
        document.querySelector('#modal')
    )
}

export default Modal