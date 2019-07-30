import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  LastAndFound,
  LastFantasy,
  ModemTimes,
  ModemTimesEpilogue,
  Palette,
  Loading
} from "../pages";
import "./App.scss";
import { RouterTransition } from "../components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Switch>
          <RouterTransition>
            <Route path="/LastAndFound" component={LastAndFound} />
            <Route path="/LastFantasy" component={LastFantasy} />
            <Route path="/ModemTimes" component={ModemTimes} />
            <Route path="/ModemTimesEpilogue" component={ModemTimesEpilogue} />
            <Route path="/Palette" component={Palette} />
          </RouterTransition>
        </Switch>

        <Route path="/Loading" component={Loading} />
      </div>
    );
  }
}

export default App;
