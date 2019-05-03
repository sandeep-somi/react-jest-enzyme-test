import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import actions from '../../redux/actions';
import { PowerSettingsNew, Person, Favorite } from '@material-ui/icons';
import { Modal, Card } from '../../components';


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

  render() {
    const { products = [] } = this.props.products;
    
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
        <Grid item xs={12} sm={12} md={12} className="cards-wrapper">
          <Grid container spacing={16}>
            {products && products.length ? products.map(item => <Card item={item} key={item.id}/>) : null}
          </Grid>
        </Grid>
        <Modal ref={(c) => this.modal = c}/>
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