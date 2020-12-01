import React, { Component } from 'react';
// import '../css/Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: 'Title 1',
          content: 'First note content'
        },
      ],
    };
  }

  render () {
    console.log(this.state.notes);
    return (
      <div className="Dashboard">
        <div className="Navbar">
          <span id='logo'>
            Notes
          </span>
        </div>
        <br />
        <div className="NoteCatalog">
          { this.state.notes[0].title }
        </div>
      </div>
    )
  }
}

export default Dashboard;
