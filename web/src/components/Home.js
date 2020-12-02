import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
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
       console.log(this.state);
       return(
          <div className="Home">
               <Grid container spacing={0}>
                   <Grid item xs={12}>
                       <AppBar position="static">
                           <Toolbar>
                               <h1>Notes App</h1>
                               <AccountCircle style={{ position: 'absolute', right: '30px'}} onClick={ this.signIn }/>
                           </Toolbar>
                       </AppBar>
                   </Grid>
                   <br />
                   <br />
                   <br />
                   <Grid item xs={12} className="Screenshot" style={{margin: '20px'}}>
                       <p id="desc">Our notes app!</p>
                       <img src={ screenshot } id="screenshot" alt="screenshot" />
                   </Grid>
               </Grid>
          </div>
       );
   }
}

export default Home;
