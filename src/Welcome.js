import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
       
        <p>
          This is welcome component {this.props.welcomeMessage}
        </p>
      </div>
    );
  }
}

export default Welcome;
