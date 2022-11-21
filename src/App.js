import React, { useContext, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import ShoppingList from './components/shoppingList';
import ThemeContext from "./contexts/theme-context";
import "./App.css";

const itemsToBuy = [];

function App() {
  const themeCtx = useContext(ThemeContext);
  const [enteredItems, setEnteredItems] = useState(itemsToBuy);

  useEffect(() => {
    setEnteredItems(JSON.parse(localStorage.getItem("items")));
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(enteredItems));
  }, [enteredItems]);

  const addingNewItemHandler = (dataObj) => {
    setEnteredItems((prevState) => {
      return [dataObj, ...prevState];
    });
  };

  const onRemovingItem = (id) => {
    const indexToRemove = enteredItems.findIndex((item) => item.id === id);
    setEnteredItems((prevState) => {
      prevState.splice(indexToRemove, 1);
      return [...prevState];
    });
  };

  return (
    <div id="app" className={themeCtx.lightMode ? "lightMode" : ""}>
      <Header />
      <main>
        <Form onAddingNewItem={addingNewItemHandler} />
        {enteredItems.length > 0 ? (
          <List itemsToRender={enteredItems} onRemovingItem={onRemovingItem} />
        ) : (
          <p>No items on your list!</p>
        )}
        <ShoppingList itemsToRender={enteredItems} ></ShoppingList>
      </main>
    </div>
  );
}

export default App;
