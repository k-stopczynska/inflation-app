import React, { useContext, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ThemeContext from "./contexts/theme-context";
import "./App.css";

const itemsToBuy = [];

function App() {
  const themeCtx = useContext(ThemeContext);
  const [enteredItems, setEnteredItems] = useState(itemsToBuy);

  const addingNewItemHandler = (dataObj) => {
    setEnteredItems((prevState) => {
      console.log(enteredItems);
      return [dataObj, ...prevState];
    });
  };

  return (
    <div id="app" className={themeCtx.lightMode ? "lightMode" : ""}>
      <Header />
      <main>
        <Form onAddingNewItem={addingNewItemHandler} />
      </main>
    </div>
  );
}

export default App;
