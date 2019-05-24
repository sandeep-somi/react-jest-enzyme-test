import React, { Component } from 'react';
import { Grid, Input } from '@material-ui/core';

const initialProduct = {
  name: '',
  price: '',
  description: '',
  offerPrice: '',
  rating: '',
  reviews: []
}

class AddProduct extends Component {
  state = {
    product: { ...initialProduct },
    errors: {}
  }

  onChange = ({ target: { name, value}}) => {
    const updatedProduct = {
      ...this.state.product,
      [name]: value
    }

    this.setState({
      product: updatedProduct,
      errors: {
        ...this.state.errors,
        [name]: ''
      }
    })
  }

  render() {
    const { product, errors } = this.state;

    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Input
            type="text"
            id="product-name"
            label="Name"
            fullWidth
            name="name"
            error={errors.email}
            value={product.name}
            onChange={this.onChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Input
            type="text"
            id="product-price"
            label="Price"
            fullWidth
            name="price"
            error={errors.price}
            value={product.price}
            onChange={this.onChange}
            required
          />
        </Grid>
      </Grid>
    );
  }
}
 
export default AddProduct;