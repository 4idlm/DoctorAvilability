import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DoctorAvailable from './DoctorAvilable'
import axios from 'axios'
import ReactDOM from 'react-dom';


class App extends Component {

 

  // componentDidMount() {
  //   let data = {
  //     "dt": "2-8-1999",
  //     "time": "13.00"
  //   }

  //   axios.post('http://localhost:4500/adding', data)
  // }
 


   



  render() {


    return (
      <div className="App ">
         


        <DoctorAvailable />
      </div>
    );
  }
}

export default App;
