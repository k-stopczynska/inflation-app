import React, { useState } from "react";
import Card from '../UI/Card';
import Button from '../UI/Button'
import classes from "./Form.module.css";

const Form = (props) => {
  const [newShopItem, setNewShopItem] = useState({itemTitle: '', itemAmount:''});

  const titleChangeHandler = (e) => {
    setNewShopItem((prevState) => {
      return {
        ...prevState,
        itemTitle: e.target.value,
      };
    });
  };

  const amountChangeHandler = (e) => {
    setNewShopItem((prevState) => {
      return {
        ...prevState,
        itemAmount: e.target.value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const itemData = {
      title: newShopItem.itemTitle,
      amount: newShopItem.itemAmount,
      id: Math.random().toString(),
      price: '',
      bought: false
    }
    props.onAddingNewItem(itemData)
    setNewShopItem({itemTitle: '', itemAmount: ''});
  };

  return (
    <Card>
    <form
      type="submit"
      className={classes.form__controls}
      onSubmit={onSubmitHandler}
    >
      <div className={classes.form__control}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={titleChangeHandler}
          value={newShopItem.itemTitle}
        ></input>
      </div>
      <div className={classes.form__control}>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          onChange={amountChangeHandler}
          value={newShopItem.itemAmount}
        ></input>
      </div>
      <div className={classes.form__control}>
        <Button type="submit">Add to list</Button>
      </div>
    </form>
    </Card>
  );
};

export default Form;
