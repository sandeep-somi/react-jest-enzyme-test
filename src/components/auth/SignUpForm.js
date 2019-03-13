import React, { Component } from 'react';
import Logo from '../../assets/images/sr-logo.png';
import { Grid, Button, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Input } from '../';

export default class extends Component {
  render() {
    const {

    } = this.props;
    return (
      <Grid container className='login-wrapper'>
        <Grid item xs={12} sm={3} md={3}>
          <form>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={12} md={12} className="login-logo">
                <img src={Logo} alt="" />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <h1>Sign Up</h1>
              </Grid>
              <div className="clear-fix-20" />
              <Grid item xs={12} sm={12} md={12}>
                <Input
                  type="text"
                  id="user-email"
                  label="Email"
                  fullWidth
                  name="email"
                  // error={errors.email}
                  // value={email}
                  // onChange={onChange}
                />
              </Grid>
              <div className="clear-fix-10" />
              <Grid item xs={12} sm={12} md={12}>
                <Input
                  // type={showPassword ? 'text' : 'password'}
                  id="user-password"
                  label="Password"
                  fullWidth
                  name="password"
                  // error={errors.password}
                  // value={password}
                  // onChange={onChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        // onClick={togglePassword}
                      >
                        {/* {showPassword ? <Visibility /> : <VisibilityOff />} */}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
              <div className="clear-fix-10" />
              <Grid item xs={12} sm={12} md={12} className="forgot-password-section">
                <span>Forgot Password?</span>
              </Grid>
              <div className="clear-fix-10" />
              <Grid item xs={12} sm={6} md={6}>
                {/* <Button variant="outlined" className="btn" fullWidth type="submit" onClick={onSubmit}>Login</Button> */}
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Button variant="outlined" className="btn" fullWidth>SignUp</Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    )
  }
}



