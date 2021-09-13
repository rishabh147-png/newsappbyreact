import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Error from './components/Error';



export default class App extends Component {
 
  render() {
    return (
      <div>
        <Navbar/>
        <Error/>
        <News pageSize={5} country="in" category="science"/>
        
      </div>

    )
  }
}



