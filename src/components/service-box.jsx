import React, { Component } from 'react';
import Service from '../layouts/service';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,Container,Form,InputGroup,FormControl } from 'react-bootstrap';
import Popup from "reactjs-popup"; 

class ServiceBox extends Component {
    state = {  }
    render() { 
        var textTitle1 = ["SMART CONTRACTS",<br/>,"DEVELOPMENT"];
        var textTitle2 = ["EXCHANGES"];
        var textTitle3 = ["BLOCKCHAIN",<br/>,"DEVELOPMENT"];
        var textTitle4 = ["HYPERLEDGER"];
        var textTitle5 = ["PRIVATE BLOCKCHAIN",<br/>,"DEVELOPMENT"];
        var textTitle6 = ["WALLET"];

        var imageName1 = "service1.png";
        var imageName2 = "service2.png";
        var imageName3 = "service3.png";
        var imageName4 = "service4.png";
        var imageName5 = "service5.png";
        var imageName6 = "service6.png";

        
        return ( 
            <React.Fragment>
            <center><h1>OUR SERVICES</h1></center>
            <div style={{display:"flex"}}>
                <Service textTitle={textTitle1} imageName = {imageName1}></Service>
                <Service textTitle={textTitle2} imageName = {imageName2}></Service>
                <Service textTitle={textTitle3} imageName = {imageName3}></Service>
            </div>
            <div style={{display:"flex"}}>
                <Service textTitle={textTitle4} imageName = {imageName4}></Service>
                <Service textTitle={textTitle5} imageName = {imageName5}></Service>
                <Service textTitle={textTitle6} imageName = {imageName6}></Service>
            </div>
            <br/>
            <br/>
            
            <Popup 
                trigger={
                <center><Button variant="outline-info">&nbsp;&nbsp;&nbsp;View all Services&nbsp;&nbsp;&nbsp;
                </Button></center>}
                modal
                closeOnDocumentClick>
                <div>
                    <h2>Lists of all Services</h2>
                    <ul class="list-unstyled">
                        <li>Smart Contracts Development</li>
                        <li>Echanges</li>
                        <li>Block Chain Development</li>
                        <li>Hyperledger</li>
                        <li>Private BlockChain Development</li>
                        <li>Wallet</li>
                    </ul>
                </div>
            </Popup>
                
            
            </React.Fragment>
         );
    }
}
export default ServiceBox;