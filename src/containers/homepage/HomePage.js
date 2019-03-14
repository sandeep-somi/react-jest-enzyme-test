import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import actions from '../../redux/actions';
import { PowerSettingsNew } from '@material-ui/icons';

class HomePage extends Component {
  state = {
    
  }

  logOut = () => {
    this.props.logout();
    this.props.history.push('/login');
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={11} md={11}></Grid>
        <Grid item xs={12} sm={1} md={1} style={{ textAlign: 'right' }}>
          <Button onClick={this.logOut}>
            <PowerSettingsNew />
          </Button>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = () => ({
  logout: () => actions.logout()
})
 
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);