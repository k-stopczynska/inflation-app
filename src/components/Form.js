import React from "react";
import classes from "./Form.module.css";

const Form = () => {
    return (
  <form type="submit" className={classes.form__controls}>
    <div className={classes.form__control}>
    <label htmlFor="title">Title</label>
    <input id="title" name="title" type="text"></input>
    </div>
    <div className={classes.form__control}>
    <label htmlFor="amount">Amount</label>
    <input id="amount" name="amount" type="number"></input>
    </div>
    <button type="submit">Add to list</button>
  </form>
    );
};

export default Form;
