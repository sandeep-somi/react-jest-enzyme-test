import React, { Component } from 'react';
import Logo from '../assets/images/sr-logo.png';
import { Grid, Button, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Input } from '../components';


export default class extends Component {
  render() {

    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Login />
        </Grid>
      </Grid>
    );
  }
}

class Login extends Component {
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
    this.setState({ user: updatedUser });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.user);
  }

  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    const { user: { email, password }, errors = {}, showPassword } = this.state;
    return (
      <Grid container className='login-wrapper' spacing={8}>
        <Grid item xs={12} sm={3} md={3}>
          <form>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={12} md={12} className="login-logo">
                <img src={Logo} alt="" />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <h1>Login</h1>
              </Grid>
              <div className="clear-fix-20" />
              <Grid item xs={12} sm={12} md={12}>
                <Input
                  type="text"
                  id="user-email"
                  label="Email"
                  fullWidth
                  name="email"
                  error={errors.email}
                  value={email}
                  onChange={this.onChange}
                />
              </Grid>
              <div className="clear-fix-10" />
              <Grid item xs={12} sm={12} md={12}>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="user-password"
                  label="Password"
                  fullWidth
                  name="password"
                  error={errors.password}
                  value={password}
                  onChange={this.onChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.togglePassword}
                      >
                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
              <div className="clear-fix-10" />
              <Grid item xs={12} sm={12} md={12} className="forgot-password-section">
                <a>Forgot Password?</a>
              </Grid>
              <div className="clear-fix-10" />
              <Grid item xs={12} sm={6} md={6}>
                <Button variant="outlined" className="btn" fullWidth type="submit" onClick={this.onSubmit}>Login</Button>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Button variant="outlined" className="btn" fullWidth>SignUp</Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
};