import React, { Component } from 'react';
import Card from './components/Card';
import Error from './components/Error';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    address: '',
    company: '',
    cardFirstName: '',
    cardLastName: '',
    cardAddress: '',
    cardCompany: '',
    error: {
      show: false,
      message: ''
    }
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (!this.state.firstName || !this.state.lastName)
      return this.setState({
        error: {
          show: true,
          message: 'please enter all required fields *'
        }
      });

    const res = await axios.post('/api', this.state);

    const { data } = res;

    this.setState({
      cardFirstName: data.firstName,
      cardLastName: data.lastName,
      cardAddress: data.address,
      cardCompany: data.company,
      firstName: '',
      lastName: '',
      address: '',
      company: ''
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  removeError = () => {
    this.setState({ error: { show: false, message: '' } });
  };

  render() {
    return (
      <div className="container">
        <Error
          visible={this.state.error.show}
          message={this.state.error.message}
          removeError={this.removeError}
        />
        <form onSubmit={this.handleSubmit}>
          <div className="card">
            <h3>Save your card!</h3>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              placeholder="First Name*"
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              placeholder="Last Name*"
            />
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
              placeholder="Address"
            />
            <input
              type="text"
              name="company"
              value={this.state.company}
              onChange={this.handleInputChange}
              placeholder="Company"
            />
            <button className="form-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
        <Card
          firstName={this.state.cardFirstName}
          lastName={this.state.cardLastName}
          address={this.state.cardAddress}
          company={this.state.cardCompany}
        />
      </div>
    );
  }
}

export default App;
