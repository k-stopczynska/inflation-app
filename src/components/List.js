import React, { useState } from "react";
import ListItem from "./ListItem";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "./Modal";
import classes from "./List.module.css";
let fullBill;
const List = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const removingItem = (id) => {
    props.onRemovingItem(id);
  };

  const onChecked = (id) => {
    props.onChecking(id);
  };

  const onChangePrice = (e, id) => {
    props.onChanging(e, id);
  };

  const getFullBillPrice = () => {
    fullBill = props.itemsToRender
      .filter((item) => item.bought === true)
      .reduce(
        (sum, item) => +(sum + parseFloat(item.price * item.amount)).toFixed(2),
        0
      );
    setIsOpen(true);
    return fullBill;
  };

  return (
    <Card>
      <ul className={classes.list}>
        {props.itemsToRender.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            price={item.price}
            checked={item.bought}
            removeItem={removingItem}
            onChecked={onChecked}
            onChangePrice={onChangePrice}
          />
        ))}
      </ul>
      <Button type="button" onClick={getFullBillPrice}>
        How much is the fish?
      </Button>
      {isOpen && (
        <Modal open={setIsOpen}>{`Your bill should be ${fullBill}`}</Modal>
      )}
    </Card>
  );
};

export default List;
