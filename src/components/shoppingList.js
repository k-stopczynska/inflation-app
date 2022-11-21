import React from 'react';
import ShoppingListItem from './shoppingListItem';
import Card from '../UI/Card';
import classes from './shoppingList.module.css';

const ShoppingList = (props) => {
return  (
<Card>
<ul className={classes.shop__list}>
  {props.itemsToRender.map((item) => (
    <ShoppingListItem key={item.id} id={item.id} title={item.title} amount={item.amount} />
  ))}
</ul>
</Card>
)
}

export default ShoppingList;