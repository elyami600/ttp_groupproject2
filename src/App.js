import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import routing from './index';
import CampusCard from './CampusCard';
import './card.css';
import ReactDOM from 'react-dom';
import CampusShow from './CampusShow';
import EditStudent from './EditStudent';

class Header extends React.Component {
  render() {
     return (
        <div>

           <ul className = "navheader">
        
              <li><a href="#Campus">Campus</a></li>
              <li><a href= "#Student">Students</a></li>
              <li><a href="#Home">Home</a></li>
            </ul>
        </div>
     );
  }
}

class App extends React.Component {
 
  render (){
    return(
      <div>
      
      <Header/>

      <CampusShow/>
      <Header/>

      <EditStudent/>
      </div>
       
   );
  }
}

export default App;


