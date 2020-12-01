import React, { Component } from 'react';
import Container from './Container';
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: 'First note',
          timestamp: '1 december 2020',
          content: 'First note content.'
        },
        {
          title: 'Second note',
          timestamp: '1 december 2020',
          content: 'Second note content.'
        },
      ],
    };
  }

  render () {
    return (
      <div className="Dashboard">
        <Grid container spacing={0}>
          <Grid item xs={12} className="NavBar">
            <AppBar className="AppBar" position="fixed">
              <Toolbar>
                <h1>Notes</h1>
              </Toolbar>
            </AppBar>
          </Grid>
          <br />
          <br />
          <br />
          <Grid item xs={12} className="Notes" style={{ marginTop:'20px' }}>
            { this.state.notes.map(note => <Container note={ note }/>)}
            <br />
            <br />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
