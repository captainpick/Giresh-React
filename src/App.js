import React, { Component }  from 'react';
import Navbar from './Components/Navbar';
import CardMain from "./Components/Card/CardMain";
import MainCaro from './Components/Caro/Caro'
import {Button}  from "antd";
import './App.css';

import "./static/back.css"

class App extends Component {
  render() {
    return (
        <div  className={"Navbar"}>
        <Navbar />
            <MainCaro/>
        <CardMain />

        </div>




    );
  }
}

export default App;
