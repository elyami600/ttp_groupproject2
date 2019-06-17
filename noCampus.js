import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
class NoCampus extends React.Component {

 
    render (){
      return(
        
        <div className = "NoStudent">
            
            <h1 className="allStud">All Campuses</h1>
            <br></br>
            <h2>There are no campuses listed in the database.</h2>
            <br></br>
            <p>Please click below to add a new campus and fill out the relevent information.</p>
            <Button className="noStBT">Add Campus</Button> 
            <p></p>
            <br></br>  
                 
            
         
          
  
         </div>   
         
  
     );
  
    }
  }
  
  export default NoCampus;
  