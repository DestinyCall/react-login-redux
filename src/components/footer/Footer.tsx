import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='page-footer'>
          <div className='container'>
            <div className='row'>
              <div className='col l6 s12'>
                <h5 className='white-text'>Footer Content</h5>
                <p className='grey-text text-lighten-4'>Lorem Ipsum</p>
              </div>
              <div className='col l4 offset-l2 s12'>
                <h5 className='white-text'>Links</h5>
                <ul>
                  <li>
                    <a className='grey-text text-lighten-3' href='#!'>
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer-copyright'>
            <div className='container'>
              © 2021 PSK
              <a className='grey-text text-lighten-4 right' href='#!'>
                Links
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
