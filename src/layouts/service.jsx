import React, { Component } from 'react';
import service1 from '../resources/images/icons/service1.png';

class Service extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div style={{flex:1}} className = "imageGrow">
                <center><img src={require(`../resources/images/icons/${this.props.imageName}`)}/></center>
                <center><span style={{fontSize:20,fontWeight:"bold"}}>{this.props.textTitle}</span></center>
            </div>
         );
    }
}
 
export default Service;