import React from 'react';
import ReactDOM from 'react-dom';
import './card.css';
import CampusShow from './CampusShow';

        
        function CampusCard(props){
              return (
              <div>
              <img src = {props.contact.imgUrl}/>
              <h1> {props.contact.name} </h1> 
              <h2> Address:</h2> <p>{props.contact.address} </p>
              <h2> Description:</h2> <p>{props.contact.description}</p>
              </div>
              )
          }

export default CampusCard;