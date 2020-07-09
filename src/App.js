import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignIn from "./components/sign in/SignIn";
import Searcher from "./components/search/Searcher";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search" component={Searcher} />
          <Route path="/sign-in" component={SignIn} />
          <Redirect exact from="/" to="/sign-in" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
