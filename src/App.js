import React, { Component } from 'react';
import './resources/styles.css';

//components
import Header from './components/header_footer/header';
import Featured from './components/featured';
import VenueInfo from './components/VenueInfo';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '1500px', backgroundColor: 'cornflowerBlue'}}>
        <Header />
        <Featured />
        <VenueInfo />
      </div>
    );
  }
}

export default App;
