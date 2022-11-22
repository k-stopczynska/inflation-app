import React, { useContext } from "react";
import ReactDOM from "react-dom";
import ThemeContext from "../contexts/theme-context";
import Button from "../UI/Button";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const themeCtx = useContext(ThemeContext);

  const closeModal = () => {
    props.open(false);
  };

  return ReactDOM.createPortal(
    <div id="modal" className={themeCtx.lightMode ? "lightMode" : ""}>
      <div className={classes.overlay} />
      <div className={classes.modal}>
        {props.children}
        <Button type="button" onClick={closeModal}>
          Close
        </Button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
