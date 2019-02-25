import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  render() {
  	return(
  		<div className="Log">
  			<h2>Log</h2>
  		</div>
  	);
  }
}