import React, { useContext, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import ThemeContext from "./contexts/theme-context";
import "./App.css";

const itemsToBuy = [];

function App() {
  const themeCtx = useContext(ThemeContext);
  const [enteredItems, setEnteredItems] = useState(itemsToBuy);

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
      </main>
    </div>
  );
}

export default App;
