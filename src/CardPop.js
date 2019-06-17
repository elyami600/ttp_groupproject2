import React from 'react';
import './App.css';

import logo from './logo.jpg'
class CardPop extends React.Component {



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
        <h4>Please fill in the following information:</h4>
        <div className ="info">
            
           <p id ="CN"> Campus Name:</p>
            
            <input></input>
            
            <p id ="IN"> Image url:</p>
            
            <input></input>
          
          
              <div className =" address">
              <p id ="AN"> Address:</p>
                
                
                <input></input>
              </div>
            <p>School Statement:</p>
            <textarea className ="tarea"></textarea>
          </div>
            
          <button className = "addCamp" onClick={this.onCk()}>Add Campus</button>
          <p></p>
          </form>
         
        
      
    </div>
      
      

   );

  }
}

export default CardPop;
