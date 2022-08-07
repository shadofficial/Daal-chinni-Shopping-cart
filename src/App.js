import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Top_nav from "./components/Top_nav";
import Login from "./components/Login";
import Order from "./components/Order";

function App() {
  return (
    <BrowserRouter>
      <Top_nav />
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Order} />
      </div>
    </BrowserRouter>
  );
}

export default App;
