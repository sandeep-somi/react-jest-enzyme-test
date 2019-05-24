import React, { Component } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';

class Modal extends Component {
  state = {
    open: false
  }

  open = () => {
    this.setState({ open: true });
  }

  close = () => {
    this.setState({ open: false });
  }

  render() {
    const {
      title = '',
      footer = null
    } = this.props;
    
    return (
      <Dialog
        open={this.state.open}
        onClose={this.close}
        aria-labelledby="scroll-dialog-title"
        scroll="body"
      >
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {this.props.children}
        </DialogContent>
        {footer ? <DialogActions>
          {footer}
        </DialogActions> : null}
      </Dialog>
    );
  }
}
 
export default Modal;