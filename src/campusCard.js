import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class campcardApp extends React.Component {

 
    render (){
      return(
        
        <div className = "campCard">
  
              <div className ="cardContent"><img className ="campus" src = "https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img></div>
                
                <div className="cardInfo">
                 <h1>Campus Name</h1>
                
                  <p>Student Number</p>

               
                </div>
                <div className ="buttn"> <Button variant="light" >Edit</Button></div>
                
                
                
          
  
         </div>   
         
  
     );
  
    }
  }
  
  export default campcardApp;
  
  