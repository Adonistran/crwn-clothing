import React from "react";
import "./App.css";
import HomePage from "./pages/hompage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignupPage from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "../src/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
