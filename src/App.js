import React, { Component, PureComponent } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Navigation from './Navigation'
import Header from './Header'
import SearchBar from './SearchBar'
import Cart from "./Listing/Cart";
import Contacts from "./Listing/Contacts";
import Error from "./Listing/Error";
import Item from './Listing/Item'
import history from './history';


class App extends PureComponent {

  render() {
    return (
      <div>
        < Router history={history} >
          <div>
            <Header />
            <SearchBar />
            <Navigation />
            <Switch>
              <Route path="/Cart" render={props =>
                <Cart
                  {...props} />}
              />
              <Route exact path="/" render={props =>
                <Item
                  {...props} />}
              />
              <Route path="/Contacts" component={Contacts} />
              <Route component={Error} />
            </Switch>
          </div>
        </Router >
      </div >
    );
  }
}

export default App;
