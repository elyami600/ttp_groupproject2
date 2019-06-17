import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import StudentCard from './studentCard';
import CampusCard from './campusCard';



class singleStudent extends React.Component {

 
    render (){
      return(
        
        
        <div className = "studentPage">
         
            <div className ="top">
              <div className ="stCard"><StudentCard/></div> 
              <div className ="cReg"><h2>Campus Registration:</h2></div>
              <div className ="caCard">
                <CampusCard/>
                <div className = "camSelect">
                  
                  <select className ="dropCam">
                  <option>Select Campus ...</option>
                  <option>school 1</option>
                  <option>school 2</option>
                  <option>school 3</option>
                  <option>school 4</option>
                 </select>
                 <br></br>
                 <br></br>
                 
                <Button  id = "chCam">Change Campus</Button>
                </div>

              </div>
              
            </div>
    
  

        </div>
  
           
  
     );
  
    }
  }
  
  export default singleStudent;
  
  