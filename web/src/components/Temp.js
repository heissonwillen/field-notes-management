import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import screenshot from '../assets/screenshot.png';
import { logIn } from '../firebase/firebase';


import '../css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uDetails: {},
    };
  }

  signIn = () => {
    let mainComp = this;
    logIn().then(details => {
      localStorage.setItem("LOCAL_UID", details.user.uid);
      mainComp.setState({
        uDetails: details,
      });
      this.props.history.push('/dashboard');
    });
  }


  render () {
    // return(
    //   <div className="Home">
    //     <Grid container spacing={0}>
    //       <Grid item xs={12}>
    //         <AppBar position="static">
    //           <Toolbar>
    //             <h1>Field Notes App</h1>
    //             <Button variant="contained" onClick={ this.signIn } style={{position:'fixed', right:'12px'}}>
    //               Log In
    //             </Button>
    //           </Toolbar>
    //         </AppBar>
    //       </Grid>
    //       <br />
    //       <br />
    //       <br />
    //       <div>
    //         <p className="info">User: test@test.com</p>
    //         <p className="info">Password: 123456789</p>
    //       </div>
    //     </Grid>
    //   </div>
    //   );
  }
}

export default Home;


import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
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
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
}
