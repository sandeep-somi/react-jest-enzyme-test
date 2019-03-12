import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Login } from './';

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