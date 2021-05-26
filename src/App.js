import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";

const Home = () => <h1> Home Page rendered</h1>;

const Category = () => <h1> Category Page rendered</h1>;

const Product = () => <h1> Product Page rendered</h1>;

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/category">
        <Category />
      </Route>
      <Route path="/products">
        <Product />
      </Route>
    </div>
  );
}

export default App;
