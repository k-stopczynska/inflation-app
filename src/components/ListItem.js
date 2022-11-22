import React from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {

  const removeItemHandler = (e) => {
    props.removeItem(e.target.closest('li').id)
  }

  const checkAsBought = (e) => {
    props.onChecked(e.target.closest('li').id)
  }
  return (
    <li className={classes.list__item}  id={props.id}>
    <input type="checkbox" onClick={checkAsBought}></input>
    <div className={classes.list__item__description}>
    <p>{props.title}</p>
    <p>{props.amount}</p>
    </div>
    <button onClick={removeItemHandler}></button>
    <input type="number" placeholder="price" min="0.01" max="9999999" step="0.01"></input>
  </li>
  );
};

export default ListItem;
