import React, { Component } from 'react';
import Header from '../layouts/header';
import header from '../resources/images/backgrounds/header.png'; 
import bitCoinImage from '../resources/images/backgrounds/bitcoin_3d_logo.png';
import bitCoin3DLogo from '../resources/images/icons/feature-bitcoin.png';
// import {headerIcon} from '../resources/images/backgrounds/header.png'
class HeaderBox extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="backgroundClass">
            <Header></Header>
            <div style={{display:"flex",alignItems:"center"}}>
                <div style={{flex:1,lineHeight:1}} > 
                    <span style={{fontSize:60,color:"white",marginLeft:40,marginTop:10}}>LOREM</span><br/>
                    <span style={{fontSize:72,color:"white",marginLeft:40,marginBottom:10}}>IPSUM</span>
                </div>
                <div style={{flex:1}}>
                    <img src = {bitCoinImage} style={{width:550,float:"right"}}/>
                </div>
            </div>
            <div>
                <img src={bitCoin3DLogo} className="bitCoin3DLogo1"/>
                <img src={bitCoin3DLogo} className="bitCoin3DLogo2"/>
            </div>
        </div>
        );
    }
}
 
export default HeaderBox;