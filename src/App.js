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

  //so basically the useEffect hook can be used to run a piece of code whenever something changes , it can be a variable , it can be when the route is mounted up
  // and  useEffect(()=>{accepts a function}, [ also accepts an array with the things if changed will trigger the code in the hook]).
  
  useEffect(() => {
    //  auth is another method provided by firebase for authentication.
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
      // eveytime the useEffect hook is triggered by a change in the objects in the array , pehle the cleanup function for the previous state is run , so that no eventlisteners stay on always. 
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
