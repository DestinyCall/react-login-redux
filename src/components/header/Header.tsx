import React, { Component } from 'react';

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
        <div className='nav-wrapper black'>
          <ul className='right'>{this.renderContents()}</ul>
        </div>
      </nav>
    );
  }
}
export default Header;
