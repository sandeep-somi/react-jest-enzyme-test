import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import actions from '../../redux/actions';
import { Card, CardLoader } from '../../components';


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

  getProducts = () => {
    this.props.getProducts();
  }

  render() {
    const { products = [], fetchingProducts = false } = this.props.products;

    if(fetchingProducts) {
      return (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} style={{ padding: 16 }}>
            <Grid container spacing={16}>
              {[...Array(18)].map(i => <Grid key={i} item xs={6} sm={4} md={3}>
                <CardLoader />
              </Grid>)}
            </Grid>
          </Grid>  
        </Grid>
      )
    }
    
    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12} className="cards-wrapper">
          <Grid container spacing={16}>
            {products && products.length ? products.map(item => <Card item={item} key={item.id}/>) : null}
          </Grid>
        </Grid>
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