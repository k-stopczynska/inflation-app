import React from 'react';
import classes from './shoppingListItem.module.css';

const ShoppingListItem = (props) => {

    const removeShopItemHandler = (e) => {
        props.removeItem(e.target.closest('li').id)
      }
return (
    <li className={classes.shop__list__item} >
      <input type="checkbox"></input>
      <div className={classes.shop__list__item__description}>
      <p>{props.title}</p>
      <p>{props.amount}</p>
      </div>
      <button onClick={removeShopItemHandler}></button>
      <input type="number" placeholder="price" min="0.01" max="9999999" step="0.01"></input>
    </li>
);
}

export default ShoppingListItem;