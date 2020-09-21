import React,{ Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Hookcounter from './components/Hookcounter';


class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">

       
       
        <Nav />
        <switch>
       
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
       
        </switch> 
      
       
      </div>
      
      </Router>
        
    );

  }
}

export default App;
