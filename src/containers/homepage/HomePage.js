import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import actions from '../../redux/actions';
import { PowerSettingsNew, Person } from '@material-ui/icons';
import { Modal } from '../../components';

class HomePage extends Component {
  state = {
    persons: {
      adults: 1,
      children: 0,
      infants: 0
    },
  }

  logOut = () => {
    this.props.logout();
    this.props.history.push('/login');
  }

  openUserInfo = () => {
    this.modal.open();
  }

  closeModal = (e) => {
    e.preventDefault();
    this.customSelect.close()
  }

  render() {
    return (
      <Grid container onClick={this.closeModal}>
        <Grid item xs={12} sm={11} md={11}></Grid>
        <Grid item xs={12} sm={1} md={1} style={{ textAlign: 'right' }}>
          <Button onClick={this.openUserInfo}>
            <Person />
          </Button>
          <Button onClick={this.logOut}>
            <PowerSettingsNew />
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <CustomSelectCounter
            ref={(c) => this.customSelect = c}
            persons={this.state.persons}
          />
        </Grid>
        <Modal
          ref={(c) => this.modal = c}
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

const style = {
  container: {
    position: 'absolute',
    border: '1px solid black',
    height: 32,
    width: '100%'
  },
  popup: {
    position: 'absolute',
    top: 40,
    width: 250,
    height: 200,
    boxShadow: '0px 0px 21px 1px #c7c7c7'
  },
  popupInner: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  popupNotch: {
    position: 'absolute',
    height: 15,
    backgroundColor: '#fff',
    width: 15,
    top: -6,
    transform: 'rotate(45deg)',
    left: 10
  },
  btn: {
    backgroundColor: 'aqua',
    width: 40
  }
}

class CustomSelectCounter extends React.Component {

  state = {
    open: false
  }

  toggle = () => {
    this.setState({ open: !this.state.open })
  }

  close = () => {
    if (this.state.open) {
      this.setState({ open: false })
    }
  }

  render() {
    const { persons = {} } = this.props
    return (
      <div style={style.container} onClick={this.toggle}>
        {this.state.open ? <div style={style.popup} onClick={(e) => e.stopPropagation()}>
          <div style={style.popupInner}>
            <span style={style.popupNotch}></span>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                <Grid container>
                  <Grid item xs={6} sm={6} md={6}>
                    Adults
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <Button style={style.btn}>-</Button> 0 <Button style={style.btn}>+</Button>
                  </Grid>
                </Grid>
                <Grid container style={{ paddingTop: 20 }}>
                  <Grid item xs={6} sm={6} md={6}>
                    Childs
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <Button style={style.btn}>-</Button> 0 <Button style={style.btn}>+</Button>
                  </Grid>
                </Grid>
                <Grid container style={{ paddingTop: 20 }}>
                  <Grid item xs={6} sm={6} md={6}>
                    Infaints
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <Button style={style.btn}>-</Button> 0 <Button style={style.btn}>+</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div> : null}
      </div>
    )
  }
}