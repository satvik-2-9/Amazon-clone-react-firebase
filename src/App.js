import React,{useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"; 
import {useStateValue} from "./StateProvider"
import { auth } from "./firebase";  
// handling the routing with the help of react-router dom.

function App() {

  const [{ user }, dispatch] = useStateValue(); 

  // useEffect <<<<<<POWERFUL
  // piece of code which runs based on a given condition.
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      
      if (authUser) {
        //  user is logged in.
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out.
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    });
    return () => {
      // any cleanup operations go in here.
      unsubscribe(); 
    }
  }, [])
  console.log(user);
  
  
  
  return (
    <Router>
      {/* router enables support for multiple page urls  */}
    <div className="App">
        <Switch>
          <Route path="/checkout">
          <Header> </Header>
            <Checkout></Checkout>
          </Route>
          <Route path = "/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Header> </Header>
            <Home></Home>
          </Route>
     </Switch>
      </div>
      </Router>
  );
}

export default App;
