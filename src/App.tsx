import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
