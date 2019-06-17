import React from 'react';
import './App.css';

import logo from './logo.jpg'
class NewStudent extends React.Component {



  constructor(props){
    super(props);
    this.state={
      //need to figure out how to add info as opposed to rerieve info
    }
  }



    onCk = (event) => {
      
      console.log("it works?");
    
    
    }


 
  render (){
    return(

      <div className = "editCard">
        
        <form className ="myCard">
        <h4>New Student Registration</h4>
        <div className ="info">
           <h6>Please fill in the following information: </h6>
            
           <p id ="CN"> First Name:</p>
            
            <input></input>
            
            <p id ="IN"> Last Name:</p>
            
            <input></input>
          
          
              <div className =" address">
              <p id ="AN"> Email:</p>
                
                
                <input></input>
              </div>

              <div className ="studentPic">
                <p>Picture Url:</p>
                 <input></input>
              </div>
              <div className ="studentGPA">
                <p>GPA:</p>
                 <input></input>
              </div>
              
            
          </div>
            
          <button className = "addCamp" onClick={this.onCk()}>Add Campus</button>
          <p></p>
          </form>
         
        
      
    </div>
      
      

   );

  }
}

export default NewStudent;

  