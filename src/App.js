import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from './Header.js';
import Home from './Home.js';
import Login from './Login.js';
import Payment from './Payment.js';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51J7CyvSJCFbexhGShviSySn6JvdLBC5YEOzlClqbi0LcWBXIeAg6QOilCEMeuPkbbVs83BhE3Hnw46zINQ9w7LDB00THAoqt5c'
)

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() =>{
    auth.onAuthStateChanged(authUser =>{
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
