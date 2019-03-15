import React, { Component } from 'react';
import actions from '../../redux/actions';
import validator from '../../validations/auth/forgotpassword';
import { ForgotPasswordForm } from '../../components';
import { connect } from 'react-redux';


class ForgotPassword extends Component {
  state = {
    user: { 
      email: ''
    },
    showPassword: false
  };

  //Function Name: onChange
  //Parameters: event
  //Description: This function is used to change the user data.
  onChange = ({ target : { name, value }}) => {
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

  //Function Name: onSubmit
  //Parameters: event
  //Description: This function is used to submit the login form.
  onSubmit = (event) => {
    event.preventDefault();
    if (this.validate(this.state.user)) {
      this.props.forgotPassword(this.state.user).then(() => {
        this.props.history.push('/');
      })
    }
  }

  //Function Name: validate
  //Parameters: user
  //Description: This function is used to validate user's email and password before login.
  validate = (user) => {
    const { isValid, errors } = validator(user);
    if (!isValid) {
      this.setState({ errors });
      return false;
    }
    return isValid
  }

  //Function Name: toToPage
  //Parameters: path
  //Description: This function is used switch routes
  goToPage = (path) => {
    this.props.history.push(path);
  }

  render() {
    const { user, errors } = this.state;

    return (
      <ForgotPasswordForm
        user={user}
        errors={errors}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        goToPage={this.goToPage}
      />
    );
  }
};

const mapStateToProps = (state) => state;
const mapDisptachToProps = () => ({
  forgotPassword: (user) => actions.forgotPassword(user)
})

export default connect(mapStateToProps, mapDisptachToProps)(ForgotPassword);