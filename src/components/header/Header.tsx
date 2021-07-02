import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component<any> {
  renderContents() {
    return (
      <li>
        <a href='/login'>Login</a>
      </li>
    );
  }
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className='left brand-logo'
          ></Link>
          <ul className='right'>{this.renderContents()}</ul>
        </div>
      </nav>
    );
  }
}
export default Header;
