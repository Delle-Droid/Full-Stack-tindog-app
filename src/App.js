import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Connect from './components/Connect';
import Image from './components/Image';
import Forgot from './components/Forgot';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
            <Navigation />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/auth/login" component={Login} />
                <Route path="/auth/register" component={Register} />
                <Route path="/user" component={Connect} />
                <Route path="/image" component={Image} />
                <Route path="/forgot/:id" component={Forgot} />
              </Switch>  
      </div>
    </Router>



  );
}

export default App;
