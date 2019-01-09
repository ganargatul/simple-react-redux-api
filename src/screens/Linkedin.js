import React, { Component } from 'react';
import '../containers/App.css';
import axios from 'axios';
import {connect} from 'react-redux';

class Linkedin extends Component{
    constructor(){
        super();
        this.state={
            api:"",
        }
    }
    render(){
        return(
            <div>
                <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81izf14qdfojgt&redirect_uri=http://localhost:3000&state=aRandomString">CONNECT LINKEDIN</a>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
   
}
export default connect(mapStateToProps)(Linkedin);