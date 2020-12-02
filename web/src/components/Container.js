import React, { Component } from 'react';
import '../css/Container.css';
import Paper from '@material-ui/core/Paper';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

class Container extends Component {
 render() {
   return(
     <div className="Note">
       <Paper className="NotePaper" style={{ background:'lightgreen'}}>
         <br />
         <span id='title' > { this.props.note.title } </span> <span id="delete"> <DeleteForeverSharpIcon onClick={ () => this.props.removeNote(this.props.note.key) } style={{fontSize: '50px'}}/> </span> <br />
         <span id='timestamp' > { this.props.note.timestamp } </span> <br /><br />
         <span id='content' > { this.props.note.content } </span>
         <br /><br />
       </Paper>
     </div>
   );
 }
}

export default Container;
