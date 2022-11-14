import React,{ useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../constants/apiConstants';
import axios from 'axios'
import Header from '../productPages/header';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AllProducts from './allProducts';
import AboutToExpire from './aboutToExpire';
import Expired from './expiredProducts';
import AddNewProduct from './addNewProduct';

function Home(props) {
  const [productDetails, setProductDetails] = useState(null);
  const [title, updateTitle] = useState(null);
    useEffect(() => {
        axios.get(API_BASE_URL+'/user/me', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        .then(async function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }
            let data = await response.json();
            setProductDetails(data);
        })
        .catch(function (error) {
          redirectToLogin()
        });
      })
    function redirectToLogin() {
    props.history.push('/login');
    }
    return(
      <div className="mt-2">
        Home page content
        <Header productDetails={productDetails} />
        <BrowserRouter>
          <Header title={title} />
          <Switch>
            <Route path='/allProducts'>
              <AllProducts />
            </Route>
            <Route path='aboutToExpire'>
              <AboutToExpire />
            </Route>
            <Route path='/expired'>
              <Expired />
            </Route>
            <Route path='/addNewProduct'>
              <AddNewProduct />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
}

export default withRouter(Home);
