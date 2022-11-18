import React from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (

      <li className={classes.list__item}>
        <div className={classes.list__item__description}>
        <p>{props.title}</p>
        <p>{props.amount}</p>
        </div>
      <button></button>
      </li>
  );
};

export default ListItem;
