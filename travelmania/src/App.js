import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <>
        <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet"></link>
      <Header></Header>
      <Booking></Booking>
      <Footer></Footer>
      </>
    );
  }
}

export default App;
