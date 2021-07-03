import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='page-footer purple'>
          <div className='container'>
            <div className='row'>
              <div className='col l6 s12'>
                <p className='grey-text text-lighten-4'>This is footer text</p>
              </div>
            </div>
          </div>
          <div className='footer-copyright'>
            <div className='container'>© 2021</div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
