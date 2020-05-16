import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

import './Modal.css';
import Button from "../Button/Button";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close()
    }
  });

  const open = () => {
    setDisplay(true)
  };

  const close = () => {    
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className={"modal-wrapper"}>
        <div onClick={close} className={"modal-backdrop"} />
          
          <div className={"modal-box"}>
          <div className="modal-header">
            <h2>{props.title}</h2>
            <Button type="close" onClick={close}>&times;</Button>
          </div>
            {props.children}
          </div>
      </div>, document.getElementById("modal-root"))
  }

  return null;

});

export default Modal;