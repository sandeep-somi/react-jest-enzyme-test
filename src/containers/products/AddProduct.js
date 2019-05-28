import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Input } from '../../components';
import validateProduct from '../../validations/products/addProduct';
import actions from '../../redux/actions';
import ReactCrop from 'react-image-crop';

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
    errors: {},
    file: {},
    crop: {
      x: 0,
      y: 0,
      width: 200,
      height: 200,
      aspect: 16/16
    }
  }

  onChange = ({ target: { name, value, files = [] } }) => {
    const updatedProduct = {
      ...this.state.product,
      [name]: value
    }
    let file = {}
    if (name === 'asset') {
      file = files[0]
    }

    this.setState({
      file,
      product: updatedProduct,
      errors: {
        ...this.state.errors,
        [name]: ''
      }
    })
  }

  isValid = (product) => {
    const { errors, isValid } = validateProduct(product);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit = () => {
    const { product, file } = this.state;

    console.log(product, 'product');

    if (this.isValid(product)) {
      actions.addProduct(product, file);
      this.props.close();
    }
  }

  onCrop = (crop) => {
    this.setState({ crop });
  }

  render() {
    const { product, errors } = this.state;

    return (
      <Grid container spacing={16}>
        <Grid item xs={12} sm={12} md={12}>
          <Input
            type="text"
            id="product-name"
            label="Name"
            fullWidth
            name="name"
            error={errors.name}
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
        <Grid item xs={12} sm={12} md={12}>
          <Input
            type="text"
            id="offer-price"
            label="Offer Price"
            fullWidth
            name="offerPrice"
            value={product.offerPrice}
            onChange={this.onChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Input
            type="textarea"
            id="product-description"
            label="Description"
            fullWidth
            name="description"
            value={product.description}
            onChange={this.onChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Input
            type="file"
            id="product-asset"
            label="Asset"
            fullWidth
            name="asset"
            value={product.asset}
            onChange={this.onChange}
            required
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <ReactCrop
            src="http://res.cloudinary.com/andy-apis/image/upload/v1556954459/demo/w4c875s1gmekzv4x7qxm.jpg"
            onChange={this.onCrop}
            crop={this.state.crop}
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={6}>
          <Button variant="outlined" className="btn" fullWidth type="submit" onClick={this.onSubmit}>Add</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Button variant="outlined" className="btn" fullWidth onClick={() => { }}>Cancel</Button>
        </Grid>
      </Grid>
    );
  }
}
 
export default AddProduct;