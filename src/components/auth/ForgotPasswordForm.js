import React, { Component } from 'react';
import Logo from '../../assets/images/ebazaar.png';
import { Grid, Button } from '@material-ui/core';
import { Input } from '../';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    const { user: { email }, errors = {}, onSubmit, onChange, goToPage } = this.props;
    return (
      <Grid container className='auth-wrapper'>
        <Grid item xs={12} sm={3} md={3} className='auth'>
          <form>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={12} md={12} className="auth-logo">
                <img src={Logo} alt="" />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <h1>Forgot Password</h1>
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

              {/* <Grid item xs={12} sm={12} md={12} className="auth-inner-right">
                <Link to='/forgotpassword'>Forgot Password?</Link>
              </Grid> */}
              <div className="clear-fix-10"/>
              <Grid item xs={12} sm={6} md={6}>
                <Button variant="outlined" className="btn" fullWidth type="submit" onClick={onSubmit}>Submit</Button>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Button variant="outlined" className="btn" fullWidth onClick={() => goToPage('/login')}>Login</Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    )
  }
}