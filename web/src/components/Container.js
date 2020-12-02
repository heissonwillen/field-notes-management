import React, { Component } from 'react';
import '../css/Container.css';
import Paper from '@material-ui/core/Paper';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

class Container extends Component {
 render() {
   return(
     <div className="Note">
       <Paper className="NotePaper" style={{ background:'lightgray'}}>
         <br />
         <span id='title' > { this.props.note.title } </span>
         <span id='timestamp' > { this.props.note.timestamp } </span>
         <br />
         <span id='content' > { this.props.note.content } </span>
       </Paper>
     </div>
   );
 }
}

export default Container;
