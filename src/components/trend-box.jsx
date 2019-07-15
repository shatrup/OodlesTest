import React, { Component } from 'react';
import Trends from '../layouts/trends';

class TrendBox extends Component {
    state = {  }
    render() { 
        var title1 = ["How Blockchain Technology",<br />,"Will Fortify", <br/>,"Real Estate Indutry"];
        var title2 = ["Blockchain Technology", <br />,"Can Help" ,<br /> ,"Fight Cyber Crimes"];
        var title3 = ["Blockchain Technology", <br /> ,"Contributing To", <br /> ,"Research & Development"];
        var image1 = "Real-Estate-Investment-Dropping.png";
        var image2 = "cybercrime2.png";
        var image3 = "businessman-business-sketch.png";
        return ( 
            <div className="trendBackground">
                <br/>
                <br/>
                <br />
                <center><h1 style={{color:"white"}}>TRENDS</h1></center>
                <br/>
                <div style={{display:"flex"}}>
                    <Trends title={title1} image={image1}></Trends>
                    <Trends title={title2} image={image2}></Trends>
                    <Trends title = {title3} image={image3}></Trends>
                </div>
            </div>
         );
    }
}
 
export default TrendBox;