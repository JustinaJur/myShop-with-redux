import React from 'react';
import Modal from "../Modal";
import history from "../history";


const Contacts = () => {
    const actions = (
        <div>
            <button onClick={e => e.stopPropagation()}> paspausk </button>
        </div>
    )
    return (
        <div className="contacts">
            <p>Thank you for showing interest in our products.</p>
            <p>You can find us every Sunday at the central market.</p>
            <button onClick={() => history.push('/')}>BACK TO PRODUCTS</button>
            <Modal
                content="Our products are not available till 16th March"
                actions={actions}
                toProducts={() => history.push('/')}
            />
        </div >
    )
}


export default Contacts 