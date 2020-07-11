import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignIn from "./components/sign in/SignIn";
import Searcher from "./components/search/Searcher";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Cookies from "universal-cookie";

function App() {
  const cookies = new Cookies();
  const signinValidation = () => {
    if (JSON.stringify(cookies.getAll()) === "{}") {
      return <Redirect to="/sign-in" />;
    } else {
      return (
        <>
          <NavBar />
          <Searcher />
          <Footer />
        </>
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">{signinValidation}</Route>
          <Route path="/sign-in" component={SignIn} />
          <Redirect exact from="/" to="/sign-in" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
