import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import HomePage from "./components/HomePage";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import Collection from "./components/CollectionPage";
import Checkout from "./components/Checkout";
import Description from "./components/Description";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/collection" component={Collection} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/description" component={Description} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
