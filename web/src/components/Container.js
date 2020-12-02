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
         <span id='description' > { this.props.note.description } </span>
         <br />
         <br />
         <span id='author' > Taken by { this.props.note.author } </span>
         <span id='timestamp' > ({ this.props.note.timestamp }) </span>
       </Paper>
     </div>
   );
 }
}

export default Container;
