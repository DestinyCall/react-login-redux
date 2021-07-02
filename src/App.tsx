import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div className='App'>
            <Header />
            <div className='appBody'>
              <Switch>
                <Route exact path='/' component={Landing} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
