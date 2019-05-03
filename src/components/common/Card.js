import React from 'react';
import defaultImg from '../../assets/images/image-placeholder.png';
import { Grid, Button, Fab } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

class Card extends React.Component {

  state = {
    active: false,
  }

  handleMouseOver = (id) => {
    this.setState({ active: true });
  }

  handleMouseOut = () => {
    if(this.state.active)
    this.setState({ active: false })
  }

  render() {
    const { active = false } = this.state;
    const { item = {} } = this.props;
    const { id = '', link = '', name = '', price = 0, desc = '', rating = 0, reviews = [] } = item;
    const src = defaultImg //item.asset ? `https://localhost:8080/${item.asset}` : defaultImg;

    return (
      <Grid item xs={6} sm={3} md={2} onMouseOver={() => this.handleMouseOver(id)} onMouseLeave={() => this.handleMouseOut()}>
        <div className={`card ${active ? 'active' : ''}`}>
            {active ? <div className="fixed-top">
              <Fab color="primary" aria-label="Add" size="small">
              <Favorite />
              </Fab>
            </div> : null }
          <div className="card-image-wrapper">
            <img src={src} alt="" />
            {active ? <div className="fixed-buttons">
              <Button>Add to Cart</Button>
              <Button>Buy Now</Button>
            </div>: null }
          </div>
          <div className="card-desc">
            <p className="item-name">{name}</p>
            <p className="item-price">Rs. {parseFloat(price).toFixed(2)}</p>
          </div>
        </div>
      </Grid>
    )
  }
};

export default Card;