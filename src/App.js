import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CardPop from './CardPop';
import NoStdtList from './NoStdList';
import SingleStudent from './singleStudent';
import CampusCard from './campusCard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import StudentCard from './studentCard';
import singleStudent from './singleStudent';
class App extends React.Component {

 
  render (){
    return(
      
      <div className = "mainPage">

            
          <CardPop/>
       
        

       </div>   
      
   );

  }
}

export default App;

