import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';



class studentCard extends React.Component {

 
    render (){
      return(
        
        <div className = "studentCard">
  
        <div className ="studentContent"><img className ="campus" src = "https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img></div>
          
          <div className="studentInfo">
          <h1>Student Name</h1>
          
          <p>GPA: 4.00</p>
          <p>Major: N/A</p>

         
          </div>
          <div className ="butn"> <Button  variant="light" >Edit</Button>
          <br></br>
          <div className ="butn"> <Button  variant="light" >delete</Button>
          </div>
          
          
          
    

   </div>  

  </div>
  
     );
  
    }
  }
  
  export default studentCard;
