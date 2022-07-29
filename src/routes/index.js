import React from 'react';
/* eslint-disable prettier/prettier */
import { Switch } from 'react-router-dom';
import MyRoute from './MyRouter';
import Login from '../pages/login';
import Page404 from '../pages/Page404';

export default function AllRoutes() {

  return (

    <Switch>

      <MyRoute exact path="/" component={Login} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>

  );
}
