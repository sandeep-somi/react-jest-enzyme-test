import React, { Component } from 'react';
import actions from '../../redux/actions';
import validator from '../../validations/auth/login';
import { LoginForm } from '../../components';
import { connect } from 'react-redux';


class Login extends Component {
  state = {
    user: { 
      email: '',
      password: ''
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
    console.log(this.state.user, 'user');
    if (this.validate(this.state.user)) {
      console.log(this.state.user, 'user');
      this.props.login(this.state.user).then(res => {
        this.props.history.push('/');
      }).catch(err => {
        alert(err.response.data.message);
      })
    }

  }

  //Function Name: togglePassword
  //Parameters: none
  //Description: This function is used to toggle show hide password.
  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
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

  goToPage = (path) => {
    this.props.history.push(path);
  }

  render() {
    const { user, errors, showPassword } = this.state;
    console.log(this.props, 'this.props');

    return (
      <LoginForm
        user={user}
        errors={errors}
        showPassword={showPassword}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        togglePassword={this.togglePassword}
        goToPage={this.goToPage}
      />
    );
  }
};

const mapStateToProps = (state) => state;
const mapDisptachToProps = () => ({
  login: (user) => actions.login(user)
})

export default connect(mapStateToProps, mapDisptachToProps)(Login);