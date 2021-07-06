import React from 'react';
import Signup from './sign-up-component';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/auth-context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './dashboard-component';
import ForgotPassword from './forgot-password-component';
import Login from './login-component';
import UpdateProfile from './update-profile-component';

import PrivateRoute from './private-route';

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
