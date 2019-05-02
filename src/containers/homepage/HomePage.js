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

  componentDidMount() {
    this.getProducts();
  }

  logOut = () => {
    this.props.logout();
    this.props.history.push('/login');
  }

  openUserInfo = () => {
    this.modal.open();
  }

  getProducts = () => {
    this.props.getProducts();
  }

  closeModal = (e) => {
    e.preventDefault();
    this.customSelect.close()
  }

  render() {
    const { products = [] } = this.props.products;
    console.log(this.props, 'this.props');
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
          <Grid container>
            {products && products.length && products
              .map(item => {
                const link = `https://localhost:8080/${item.asset}`
                return <Grid item xs={12} sm={2} md={2}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  {item && item.asset ? < img src={link} height="50" width="50" /> : null }
                </Grid>
            })}
          </Grid>
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
  logout: () => actions.logout(),
  getProducts: () => actions.getProducts()
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);