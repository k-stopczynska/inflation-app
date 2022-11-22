import React, { useState } from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  const [checked, setChecked] = useState(false);
  const [newPrice, setNewPrice] = useState("");

  const removeItemHandler = (e) => {
    props.removeItem(e.target.closest("li").id);
  };

  const checkAsBought = (e) => {
    props.onChecked(e.target.closest("li").id);
    setChecked(!checked);
  };

  const changePriceHandler = (e) => {
    props.onChangePrice(e, e.target.closest("li").id);
    setNewPrice(e.target.value);
  };
  return (
    <li className={classes.list__item} id={props.id}>
      <input
        type="checkbox"
        onChange={checkAsBought}
        checked={props.checked && "checked"}
      ></input>
      <div className={classes.list__item__description}>
        <p>{props.title}</p>
        <p>{props.amount}</p>
      </div>
      <button onClick={removeItemHandler}></button>
      <input
        type="number"
        value={props.price}
        placeholder="price"
        min="0.01"
        max="9999999"
        step="0.01"
        onChange={changePriceHandler}
      ></input>
    </li>
  );
};

export default ListItem;
