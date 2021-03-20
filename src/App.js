import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Destination from './Components/Destination/Destination';
import NoMatch from './Components/NoMatch/NoMatch';
import Header from './Components/Header/Header';
import firebase from "firebase/app";
import firebaseConfig from './Components/Config/firebaseConfig'
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext()

function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route path='/blog'>
            <h2>This is blog page.</h2>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
        <p style={{ textAlign: 'center', color: 'white', padding: '10px' }}>Developed by <a style={{ color: '#fffff3' }} href="https://github.com/ishtiak-ahmed">Ishtiak Ahmed</a></p>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
