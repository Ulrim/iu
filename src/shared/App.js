import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  GrowingUp,
  LastFantasy,
  ModemTimes,
  ModemTimesEpilogue,
  Palette
} from "../pages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />

        <Switch>
          <Route exact path="/GrowingUp" component={GrowingUp} />
          <Route exact path="/LastFantasy" component={LastFantasy} />
          <Route exact path="/ModemTimes" component={ModemTimes} />
          <Route
            exact
            path="/ModemTimesEpilogue"
            component={ModemTimesEpilogue}
          />
          <Route exact path="/Palette" component={Palette} />
        </Switch>
      </div>
    );
  }
}

export default App;
