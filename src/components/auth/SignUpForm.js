import React, { Component } from 'react';
import Logo from '../../assets/images/ebazaar.png';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Input } from '../';

export default class extends Component {
  render() {
    const {
      user: {
        firstName,
        lastName,
        email, 
        password,
        confirmPassword,
        phone
      },
      errors = {},
      onChange,
      onSubmit,
      reset
    } = this.props;
    return (
      <Grid container className='auth-wrapper'>
        <Grid item xs={12} sm={3} md={3} className="auth">
          <form>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={12} md={12} className="auth-logo">
                <img src={Logo} alt="" />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <h1>Sign Up</h1>
              </Grid>
              
              <Grid item xs={12} sm={12} md={12}>
                <Input
                  type="text"
                  id="user-email"
                  label="Email"
                  fullWidth
                  name="email"
                  error={errors.email}
                  value={email}
                  onChange={onChange}
                  required
                />
              </Grid>
              
              <Grid item xs={12} sm={12} md={12}>
                <Input
                  type="text"
                  id="firstName"
                  label="First Name"
                  fullWidth
                  name="firstName"
                  error={errors.firstName}
                  value={firstName}
                  onChange={onChange}
                  required
                />
              </Grid>
              
              <Grid item xs={12} sm={12} md={12}>
                <Input
                  type="text"
                  id="lastName"
                  label="Last Name"
                  fullWidth
                  name="lastName"
                  error={errors.lastName}
                  value={lastName}
                  onChange={onChange}
                />
              </Grid>
              
              <Grid item xs={12} sm={12} md={12}>
                <Input
                  type="password"
                  id="password"
                  label="Password"
                  fullWidth
                  name="password"
                  error={errors.password}
                  value={password}
                  onChange={onChange}
                  required
                />
              </Grid>
              
              <Grid item xs={12} sm={12} md={12}>
                <Input
                  type="password"
                  id="confirmPassword"
                  label="Confirm Password"
                  fullWidth
                  name="confirmPassword"
                  error={errors.confirmPassword}
                  value={confirmPassword}
                  onChange={onChange}
                  required
                />
              </Grid>
              
              <Grid item xs={12} sm={12} md={12}>
                <Input
                  type="phone"
                  id="phone"
                  label="Phone"
                  fullWidth
                  name="phone"
                  error={errors.phone}
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
              
              <Grid item xs={12} sm={12} md={12} className="auth-inner-right">
                <Link to="/login">Already have an account?</Link>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Button variant="outlined" className="btn" fullWidth type="submit" onClick={onSubmit}>Sign Up</Button>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Button variant="outlined" className="btn" fullWidth type="submit" onClick={reset}>Reset</Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    )
  }
}



