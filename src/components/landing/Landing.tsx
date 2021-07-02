import React, { Component } from 'react';
export default class Landing extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col s12 m12'>
          <div className='card blue-grey darken-1'>
            <div className='card-content white-text'>
              <span className='card-title'>Card Title</span>
              <p>Click on Login to simulate merchant login flow.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
