import React, { Component } from 'react';

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp_id: '',
      emp_email: ''
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <input
          name="emp_id"
          value={this.state.emp_id}
          onChange={this.handleInputChange}
          placeholder="Employee ID"
        />
        <br />
        <input
          name="emp_email"
          value={this.state.emp_email}
          onChange={this.handleInputChange}
          placeholder="Employee Email"
        />
        <div>
          <p>Employee ID: {this.state.emp_id}</p>
          <p>Employee Email: {this.state.emp_email}</p>
        </div>
      </div>
    );
  }
}

export default EmployeeDetails;
