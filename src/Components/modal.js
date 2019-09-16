import React from 'react';
import ReactDOM from "react-dom";
//import ProductDetails from './productdetails';

import '../css/modal.css';

const ModalInner = (props) =>
    <div>
        <div className="modal-wrapper"
            style={{
                transform: props.show ? 'translateY(0vh)' : 'translateY(-50vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <div className="modal-header">
                <h3>Product Details</h3>
                <span className="close-modal-btn" onClick={props.close}>×</span>
            </div>
            <div className="modal-body">
{/*                <ProductDetails></ProductDetails>        */}
            </div>
            <div className="modal-footer">
            </div>
        </div>
    </div>;

const modal = (props) => {
        return ReactDOM.createPortal(<ModalInner show={props.show} close={props.close} />, document.querySelector("#modal")); 
}

export default modal;