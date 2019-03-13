import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {
  Login,
  SignUp,
  HomePage,
} from './containers';
import utils from './utils';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return utils.isLoggedIn() ? <Redirect to={{ pathname: '/' }}/> : <Component {...props} />
  }} />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return utils.isLoggedIn() ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />
  }} />
);

// const CommonRoute = () => {

// }

export default class Routes extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={HomePage} />
          <PublicRoute path='/login' component={Login} />
          <PublicRoute path='/signup' component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
};
