import React from 'react';
import ReactDOM from 'react-dom';
import './card.css';
import CampusCard from './CampusCard';

    
class CampusShow extends React.Component{
    render() {
        return (

        <div className = "container">

                <div className = "container1">
                <CampusCard 
                contact = {{
                 imgUrl:"http://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/06/23/College_campus_t580.jpg?8f1b5874916776826eb17d7e67de7278c987ca33",
                 name: "Hunter College",
                 address:  " 250 Bedford Park, NY",
                 description: " Lorem ipsum dolor sit amet, explicari necessitatibus an qui, suas probo epicuri ut sea. Atqui nostrud eos in, tation rationibus no mea. Cu deleniti expetendis eam. Congue commodo constituto vel an, erat laudem in nec, cum eu placerat scripserit. Ei vero aeterno placerat vis, ex nec mollis oblique facilisis, nullam gubergren id cum."}}
                 />
                 <div className = "btn-div">
                 <button className = "btn">Edit</button>
                 <button className = "btn">Delete</button>
                 </div>

                 </div>

                 <div className = "container1">
                <CampusCard 
                contact = {{
                 imgUrl:"http://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/06/23/College_campus_t580.jpg?8f1b5874916776826eb17d7e67de7278c987ca33", 
                 name:  "Lehman College",
                 address:  " 250 Bedford Park, NY",
                 description:  " Lorem ipsum dolor sit amet, explicari necessitatibus an qui, suas probo epicuri ut sea. Atqui nostrud eos in, tation rationibus no mea. Cu deleniti expetendis eam. Congue commodo constituto vel an, erat laudem in nec, cum eu placerat scripserit. Ei vero aeterno placerat vis, ex nec mollis oblique facilisis, nullam gubergren id cum."}}
                 />
                 <div className = "btn-div">
                 <button className = "btn">Edit</button>
                 <button className = "btn">Delete</button>
                 </div>
                 </div>


                 <div className = "container1">
                <CampusCard 
                contact = {{
                 imgUrl:"http://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/06/23/College_campus_t580.jpg?8f1b5874916776826eb17d7e67de7278c987ca33", 
                 name: "City College",
                 address:  " 250 Bedford Park, NY",
                 description: " Lorem ipsum dolor sit amet, explicari necessitatibus an qui, suas probo epicuri ut sea. Atqui nostrud eos in, tation rationibus no mea. Cu deleniti expetendis eam. Congue commodo constituto vel an, erat laudem in nec, cum eu placerat scripserit. Ei vero aeterno placerat vis, ex nec mollis oblique facilisis, nullam gubergren id cum."}}
                 /> 
                 <div className = "btn-div">
                 <button className = "btn">Edit</button>
                 <button className = "btn">Delete</button>
                 </div>
                 </div> 

                 <div className = "container1">
                <CampusCard 
                contact = {{
                 imgUrl:"http://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/06/23/College_campus_t580.jpg?8f1b5874916776826eb17d7e67de7278c987ca33", 
                 name: "City College",
                 address:  " 250 Bedford Park, NY",
                 description: " Lorem ipsum dolor sit amet, explicari necessitatibus an qui, suas probo epicuri ut sea. Atqui nostrud eos in, tation rationibus no mea. Cu deleniti expetendis eam. Congue commodo constituto vel an, erat laudem in nec, cum eu placerat scripserit. Ei vero aeterno placerat vis, ex nec mollis oblique facilisis, nullam gubergren id cum."}}
                 /> 
                 <div className = "btn-div">
                 <button className = "btn">Edit</button>
                 <button className = "btn">Delete</button>
                 </div>
                 </div>   

                 <div className = "container1">
                <CampusCard 
                contact = {{
                 imgUrl:"http://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/06/23/College_campus_t580.jpg?8f1b5874916776826eb17d7e67de7278c987ca33", 
                 name: "City College",
                 address:  " 250 Bedford Park, NY",
                 description: " Lorem ipsum dolor sit amet, explicari necessitatibus an qui, suas probo epicuri ut sea. Atqui nostrud eos in, tation rationibus no mea. Cu deleniti expetendis eam. Congue commodo constituto vel an, erat laudem in nec, cum eu placerat scripserit. Ei vero aeterno placerat vis, ex nec mollis oblique facilisis, nullam gubergren id cum."}}
                 /> 
                 <div className = "btn-div">
                 <button className = "btn">Edit</button>
                 <button className = "btn">Delete</button>
                 </div>
                 </div>    
            </div>
        
     
        );
    } 
}   

    export default CampusShow;
