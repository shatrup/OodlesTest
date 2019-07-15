import React from "react";
//const axios = require('axios');

class Footer extends React.Component {
    render() {
        return (
            <footer style={{marginTop:5,backgroundColor:"#1A4060",color:"#FFF",paddingLeft:25}}>
                <div class="footer-copyright py-3">© Copyright 2009-2019 OodlesTechnologies. All rights reserved.
                </div>
            </footer>
        );
    }
}

export default Footer;