import React from 'react';
import 'normalize.css';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { NoMatch } from './views/NoMatch';
import { NavBar } from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';

export class Routes extends React.Component {


    state = {
      loginIsOpen: false
    }
  
    loginModal = () => {
      this.setState({
        loginIsOpen: !this.state.loginIsOpen
      })
    }


  render() {
  return (
    <React.Fragment>
      <NavBar modalOpen={this.loginModal}/>
      {this.state.loginIsOpen && <LoginForm modalOpen={this.loginModal} />}
        
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </React.Fragment>
  );
  }
};
