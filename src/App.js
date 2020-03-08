import React, { Component }  from 'react';
import Navbar from './Components/Navbar';
import CardMain from "./Components/Card/CardMain";
import {Button}  from "antd";
import './App.css';
import "./static/back.css"

class App extends Component {
  render() {
    return (
        <div  className={"Navbar"}>
        <Navbar />

        <CardMain />
        </div>




    );
  }
}

export default App;
