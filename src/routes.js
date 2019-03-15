import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {
  Login,
  SignUp,
  HomePage,
  ForgotPassword,
  ResetPassword
} from './containers';
import utils from './utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return utils.isLoggedIn() ? <Redirect to={{ pathname: '/' }} /> : <Component {...props} />
  }} />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return utils.isLoggedIn() ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />
  }} />
);

class Routes extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path='/' component={HomePage} />
            <PublicRoute path='/login' component={Login} />
            <PublicRoute path='/signup' component={SignUp} />
            <PublicRoute path='/forgotpassword' component={ForgotPassword} />
            <PublicRoute path='/resetpassword/:token' component={ResetPassword} />
          </Switch>
        </BrowserRouter>
        <ToastContainer />
      </div>
    );
  }
};

export default connect(state => state)(Routes)
