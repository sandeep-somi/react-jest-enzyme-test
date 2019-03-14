import React, { Component } from 'react';
import actions from '../../redux/actions';
import validator from '../../validations/auth/signup';
import { SignUpForm } from '../../components';
import { connect } from 'react-redux';
import { initialUser } from '../../constants';


class SignUp extends Component {
  state = {
    user: {
      ...initialUser,
      confirmPassword: '',
    },
    errors: {}
  }

  //Function Name: onChange
  //Parameters: event
  //Description: This function is used to change the user data.
  onChange = ({ target: { name, value } }) => {
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
  //Parameters: event, login
  //Description: This function is used to submit the login form.
  onSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    
    if (this.validate(user)) {
      const { confirmPassword, ...restUser } = user;
      this.props.signup(restUser).then(res => {
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

  //Function Name: reset
  //Parameters: none
  //Description: This function is used reset the signup form.
  reset = (e) => {
    e.preventDefault();
    this.setState({
      user: {
        ...initialUser,
        confirmPassword: ''
      },
      errors: {}
    })
  }

  render() {
    const { user, errors } = this.state;
    
    return (
      <SignUpForm
        user={user}
        errors={errors}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        goToPage={this.goToPage}
        reset={this.reset}
      />
    );
  }
}
 
const mapStateToProps = (state) => state;
const mapDisptachToProps = () => ({
  signup: (user) => actions.signUp(user)
})

export default connect(mapStateToProps, mapDisptachToProps)(SignUp);