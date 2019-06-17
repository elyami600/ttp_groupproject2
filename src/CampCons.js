import React from 'react';

class CampCons extends React.Component{
    render(){
        return(// the ones below are accessing info from file based on the input
            <div>
                <label>{this.props.Campus}</label><br />
                <label>{this.props.Url}</label><br />
                <label>{this.props.Address}</label><br />
                <label>{this.props.SchoolStatement}</label><br />
               
            </div>
        );
    }
}

export default CampCons;