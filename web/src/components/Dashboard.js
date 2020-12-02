import React, { Component } from 'react';
import Container from './Container';
import Grid from '@material-ui/core/Grid';
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
import DatePicker from 'react-datepicker';
import { addToDB, removeFromDB, logOut, fetchFromDB } from '../firebase/firebase';

function Transition(props) {
 return <Slide direction="up" {...props} />;
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
     notes: [],
     open: false,
     author: null,
     description: null,
     timestamp: null,
   };
 }

 componentDidMount() {
   fetchFromDB()
     .then(notes => {
       console.log(notes);
       this.setState({
         notes: notes,
       });
     });
   }

 addNote = () => {
   var date = new Date();
   // var timestamp = date.getDate() + '/' + (date.getMonth() + 1) + ' | ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
   var timestamp = this.state.timestamp;
   console.log(timestamp);
   var note = {};
   note['author'] = this.state.author;
   note['timestamp'] = timestamp;
   note['description'] = this.state.description;
   var key = addToDB(note);
   note['key'] = key;
   var notes = this.state.notes;
   notes.push(note);
   this.setState({
     notes: notes,
   })
   this.handleClose();
 }

 removeNote = (noteKey) => {
   var notes = this.state.notes;
   console.log(noteKey);
   for(var i = 0; i < Object.keys(notes).length; ++i) {
     if(notes[i].key === noteKey) {
       notes.splice(i, 1);
       removeFromDB(noteKey);
       this.setState({
         notes: notes,
       });
       return;
     }
   }
 }

 handleClickOpen = () => {
   this.setState({
     open: true,
   });
 };

 handleClose = () => {
   this.setState({
     open: false,
     author: '',
     description: '',
   });
 };

 handleChange = name => event => {
   this.setState({
     [name]: event.target.value,
   });
 };

 handleDateChange = event => {
   this.setState({
     timestamp: event.target.value,
   });
   console.log(event.target.value);
 };

 logOut = () => {
    localStorage.removeItem('LOCAL_UID');
    logOut();
    this.props.history.push('/');
  }

 render () {
   const { classes } = this.props;
   const AddButtonStyle = {
     position: 'fixed',
     right: '4%',
     bottom: '6%',
   };
   return (
        <div>
        {
          localStorage.getItem('LOCAL_UID') != undefined ?
          (
            <div className="Dashboard">
              <Grid container spacing={0}>
                <Grid item xs={12} className="NavBar">
                  <AppBar className="AppBar" position="fixed">
                    <Toolbar>
                      <h1>Your Field Notes</h1>
                      <Button variant="contained" onClick={ this.logOut } style={{position:'fixed', right:'12px'}}>
                        Log Out
                      </Button>
                    </Toolbar>
                  </AppBar>
                </Grid>
                <br />
                <br />
                <br />
                <Grid item xs={12} className="Notes" style={{ marginTop:'20px' }}>
                  { this.state.notes.map(note => <Container removeNote={ this.removeNote } note={ note } key={ note.key }/> )}
                  <br />
                  <br />
                </Grid>
              </Grid>
              <Button className='AddButton' onClick={this.handleClickOpen} style={ AddButtonStyle } variant="fab" color="primary" aria-label="Add">
                <AddIcon />
              </Button>
              <Dialog
                open={this.state.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">
                    <TextField
                      id="itle"
                      label="Author"
                      placeholder="Note Author"
                      className={classes.textField}
                      value={this.state.author}
                      onChange={this.handleChange('author')}
                      margin="normal"
                    />
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                  <TextField
                    id="description"
                    label="Description"
                    placeholder="Add your note here"
                    multiline
                    value={this.state.description}
                    className={classes.textField}
                    onChange={this.handleChange('description')}
                    margin="normal"
                  />
                  </DialogContentText>
                </DialogContent>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    onChange={date => this.handleDateChange(date)}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={this.addNote} color="primary">
                    Add
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          ):(
            <h1>Please log in to continue</h1>
          )
        }
        </div>
      );
 }
}

Dashboard.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
