import './card.css';
import './studentcss.css';
import React from 'react';


class EditStudent extends React.Component{
   constructor(props) {
       super(props);
     
        this.state = {
            name: "",
            gpa: "",
            stuUrl:""
        }
        };
        

        // fillform = (event) => {
        //     event.preventDefault();
        //     let userInput = event.target[0].value;
        //     console.log(userInput);

        // }
    

    
      render() {
        return (
            
        <div className = "formdiv">

        <form >
           <h1 className = "h1Edit">Edit Student</h1> 

           <div className = "insideform">
               <div className = "formform">
            <label>
              Name:
              </label>
              <br/>
              <input type="text" 
              value={this.state.name} 
              onChange = { e =>this.setState({name: e.target.value},console.log(this.state))} />
              
            
            <br/>

            <label>
              GPA:
              </label>
              <br/>
              <input type="number" 
              value={this.state.gpa} 
              onChange = { e =>this.setState({gpa: e.target.value},console.log(this.state))} />
           
            <br/>

            <label>
              Student URL:
              </label>
              <br/>
              <input type="text" 
              value={this.state.stuUrl} 
              onChange = { e =>this.setState({stuUrl: e.target.value},console.log(this.state))} />
           
            <br/>
            
            

            <input type="submit" value="Submit" />
            </div>

            </div>
          </form>

          </div>
        );
      }
    }

    
export default EditStudent;