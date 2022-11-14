import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AllProducts from './productPages/allProducts';
import AboutToExpire from './productPages/aboutToExpire';
import Expired from './productPages/expiredProducts';
import RegistrationForm from './profile/registrationForm';
import LoginForm from './profile/loginForm';
import Header from './productPages/header';
import PrivateRoute from './utils/privateRoute';
import HomePage from './productPages/homePage';
import AddNewProduct from './productPages/addNewProduct';

function App() {
  const [title, updateTitle] = useState(null);
  return (
    <div>
      <BrowserRouter>
        <Header title={title} />
        <Switch>
          <Route exact path='/'>
            <RegistrationForm updateTitle={updateTitle} />
          </Route>
          <Route path="/register">
            <RegistrationForm updateTitle={updateTitle} />
          </Route>
          <Route path='/login'>
            <LoginForm updateTitle={updateTitle} />
          </Route>
          <Route path='/allProducts'>
            <AllProducts />
          </Route>
          <Route path='/aboutToExpire'>
            <AboutToExpire />
          </Route>
          <Route path='/expired'>
            <Expired />
          </Route>
          <Route path='/addNewProduct'>
            <AddNewProduct />
          </Route>
          <PrivateRoute path="/home">
            <HomePage />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
