import React, { useContext } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ThemeContext from './contexts/theme-context'
import "./App.css";

function App() {
const themeCtx = useContext(ThemeContext);

  return (
    <div id="app" className={themeCtx.lightMode ? 'lightMode' : ''}>
      <Header />
      <main>
      <Form />
      </main>
    </div>
  );
}

export default App;
