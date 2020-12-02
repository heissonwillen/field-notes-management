import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { logIn } from '../firebase/firebase';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import '../css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uDetails: {},
      password: '',
      email: '',
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  signIn = () => {
    let mainComp = this;
    logIn(this.state.email, this.state.password).then(details => {
      localStorage.setItem("LOCAL_UID", details.user.uid);
      mainComp.setState({
        uDetails: details,
      });
      this.props.history.push('/dashboard');
    });
  }

  render () {
    return(
      <div className="Home">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <AppBar position="static">
              <Toolbar>
                <h1>Field Notes App</h1>
              </Toolbar>
            </AppBar>
          </Grid>
          <br />
          <br />
          <br />
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className="paper">
                <form className="form" noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    onChange={this.handleChange('email')}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={this.handleChange('password')}
                    autoComplete="current-password"
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.signIn}
                  >
                    Sign In
                  </Button>
                </form>
              </div>
            </Container>
        </Grid>
      </div>
    );
  }
}

export default Home;
