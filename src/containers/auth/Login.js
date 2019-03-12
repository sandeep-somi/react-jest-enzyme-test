import React, { Component } from 'react';
import { LoginForm } from '../../components';
import validator from '../../validations/auth/login';

export default class extends Component {
  state = {
    user: { 
      email: '',
      password: ''
    },
    showPassword: false
  };

  onChange = (event) => {
    const { name, value } = event.target;
    const updatedUser = {
      ...this.state.user,
      [name]: value
    }
    const updatedErrors = {
      ...this.state.errors,
      [name]: ''
    }
    this.setState({
      user: updatedUser,
      errors: updatedErrors
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.validate(this.state.user);
  }

  togglePassword = () => {

    this.setState({ showPassword: !this.state.showPassword });
  }

  validate = (user) => {
    const { isValid, errors } = validator(user);
    if (!isValid) {
      this.setState({ errors });
      return false;
    }
    return !isValid
  }

  render() {
    const { user, errors, showPassword } = this.state;
    return (
      <LoginForm
        user={user}
        errors={errors}
        showPassword={showPassword}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        togglePassword={this.togglePassword}
      />
    );
  }
};