import React, { Component } from 'react';
import Container from './Container';
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

function Transition(props) {
  return <Slide direction="up" {...props} />
}

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500,
    overflow: 'hidden',
  },
});

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
      open: false,
    };
  }

  addNotetoDB = () => {

  }

  handleClickOpen = () =>{
    this.setState({
      open: true,
    });
  };

  handleClose = () =>{
    this.setState({
      open: false,
      title: '',
      content: '',
    });
  };

  render () {
    const { classes } = this.props;
    const AddButtonStyle = {
      position: 'fixed',
      right: '4%',
      bottom: '6%',
    };
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
        <Button className='AddButton' onClick={this.handleClickOpen} style={ AddButtonStyle } variant="fab" color="secondary" aria-label="Add">
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponen={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <TextField
              id="title"
              label="title"
              placeHolder="Note Titlle"
              className="text-field"
              onChange={this.handleChange('title')}
              value={this.state.title}
              margin="normal"
            />
          </DialogTitle>
        </Dialog>
      </div>
    );
  }
}

export default Dashboard;
