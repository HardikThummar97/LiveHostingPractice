import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { Login } from "./components/Login";
import { ProductDetail } from "./components/ProductDetail";
import { PrivateRoute } from "./components/PrivateRoute";
import { Cart } from "./components/Cart";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <h3>Home</h3>
        </Route>
        <Route path="/about">
          <h3>About</h3>
        </Route>
        <Route path="/contact">
          <h3>Contact</h3>
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <PrivateRoute path="/products/:id">
          <ProductDetail />
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard">
          Dashboard
        </PrivateRoute>
        <PrivateRoute path="/dashboard/setting">
          Dashboard Settings
        </PrivateRoute>
        <PrivateRoute path="/cart">
          <Cart />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <div>Error 404. Page Not Found</div>
        </Route>
      </Switch>
    </div>
  );
}
