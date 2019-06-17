import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
class NoStud extends React.Component {

 
    render (){
      return(
        
        <div className = "NoStudent">
            
            <h1 className="allStud">All Students</h1>
            <br></br>
            <h2>There are no students listed in the database.</h2>
            <br></br>
            <p>Please click below to add a new student and fill out the relevent information.</p>
            <Button className="noStBT">Add Student</Button> 
            <p></p>
            <br></br>  
                 
            
         
          
  
         </div>   
         
  
     );
  
    }
  }
  
  export default NoStud;
  