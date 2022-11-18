import React from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {

  const removeItemHandler = (e) => {
    props.removeItem(e.target.closest('li').id)
  }
  return (

      <li className={classes.list__item} id={props.id}>
        <div className={classes.list__item__description}>
        <p>{props.title}</p>
        <p>{props.amount}</p>
        </div>
        <button onClick={removeItemHandler}></button>
      </li>
  );
};

export default ListItem;
