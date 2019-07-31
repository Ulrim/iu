import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  LostChild,
  LastFantasy,
  ModernTimes,
  ModernTimesEpilogue,
  Palette,
  Loading,
  Parting,
  Day,
  Story,
  Flower,
  Sogyeokdong,
  Mind,
  ChatShire,
  NightLetter,
  Flowertwo,
  Beep,
  Flowertwos
} from "../pages";
import "./App.scss";
import { RouterTransition } from "../components";

const items = [
  { path: "/LostChild", component: LostChild },
  { path: "/Parting", component: Parting },
  { path: "/Story", component: Story },
  { path: "/LastFantasy", component: LastFantasy },
  { path: "/Day", component: Day },
  { path: "/ModernTimes", component: ModernTimes },
  { path: "/ModernTimesEpilogue", component: ModernTimesEpilogue },
  { path: "/Flower", component: Flower },
  { path: "/Sogyeokdong", component: Sogyeokdong },
  { path: "/Mind", component: Mind },
  { path: "/ChatShire", component: ChatShire },
  { path: "/NightLetter", component: NightLetter },
  { path: "/Palette", component: Palette },
  { path: "/Flowertwo", component: Flowertwo },
  { path: "/Flowertwos", component: Flowertwos },
  { path: "/Beep", component: Beep }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Switch>
          <RouterTransition>
            {items.map(item => (
              <Route
                key={`key_${item.path}`}
                path={item.path}
                component={item.component}
              />
            ))}
          </RouterTransition>
        </Switch>

        <Route path="/Loading" component={Loading} />
      </div>
    );
  }
}

export default App;
