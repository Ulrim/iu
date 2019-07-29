import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  Home,
  GrowingUp,
  LastFantasy,
  ModemTimes,
  ModemTimesEpilogue,
  Palette
} from "../pages";
import "./App.css";
import { RouterTransition } from "../components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterTransition>
          <Route path="/GrowingUp" component={GrowingUp} />
          <Route path="/LastFantasy" component={LastFantasy} />
          <Route path="/ModemTimes" component={ModemTimes} />
          <Route path="/ModemTimesEpilogue" component={ModemTimesEpilogue} />
          <Route exact path="/Palette" component={Palette} />
          <Route path="/" component={Home} />
        </RouterTransition>
      </div>
    );
  }
}

export default App;
