import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'App.scss';
import Store from 'redux/store.provider';

import Landing from 'components/landing/Landing';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Auth from 'components/auth/Auth';
import Dashboard from 'components/dashboard/Dashboard';

export default class App extends Component {
  render() {
    return (
      <Store>
        <Router>
          <div className='container'>
            <div className='App'>
              <Header />
              <div className='appBody'>
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route exact path='/login' component={Auth} />
                  <Route exact path='/dashboard' component={Dashboard} />
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
        </Router>
      </Store>
    );
  }
}
