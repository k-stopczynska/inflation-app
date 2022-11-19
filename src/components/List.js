import React from "react";
import ListItem from "./ListItem";
import Card from "../UI/Card";
import Button from '../UI/Button'
import classes from "./List.module.css";

const List = (props) => {

    const removingItem = (id) => {
     props.onRemovingItem(id)
    }

  return (
    <Card>
      <ul className={classes.list}>
        {props.itemsToRender.map((item) => (
          <ListItem key={item.id} id={item.id} title={item.title} amount={item.amount} removeItem={removingItem}/>
        ))}
      </ul>
      <Button>Let's go and buy some things!</Button>
    </Card>
  );
};

export default List;
