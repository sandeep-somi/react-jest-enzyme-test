import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import actions from '../../redux/actions';
import { PowerSettingsNew, Person } from '@material-ui/icons';
import { Modal } from '../../components';

class HomePage extends Component {
  state = {
    
  }

  logOut = () => {
    this.props.logout();
    this.props.history.push('/login');
  }

  openUserInfo = () => {
    this.modal.open();
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={11} md={11}></Grid>
        <Grid item xs={12} sm={1} md={1} style={{ textAlign: 'right' }}>
          <Button onClick={this.openUserInfo}>
            <Person />
          </Button>
          <Button onClick={this.logOut}>
            <PowerSettingsNew />
          </Button>
        </Grid>
        <Modal
          ref={(c) => this.modal = c }
        />
      </Grid>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = () => ({
  logout: () => actions.logout()
})
 
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);