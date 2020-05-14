import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

const Modal = forwardRef((props, ref) => {
//   const [display, setDisplay] = useState(true);
    const [display, setDisplay] = useState(props.isOpen)
    console.log(display);

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
            <h1> {props.header} </h1>
            {props.children}
        </div>
      </div>, document.getElementById("modal-root"))
  }

  return null;

});

export default Modal;