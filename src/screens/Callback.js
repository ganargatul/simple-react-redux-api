import React, { Component } from 'react';
import '../containers/App.css';
import axios from 'axios';
import {connect} from 'react-redux';
import jsonop from 'jsonp';
class Callback extends Component{
    constructor(){
        super();
        this.getCode = this.getCode.bind(this);
        this.state={
            api:"",
            client_id:"81izf14qdfojgt",
            client_secret:"yOAGHR1V3gz9W5y3",
            grant_type:"authorization_code",
            redirect_uri:"http://localhost:3000",
            dataapi:""
        }
    }
    componentDidMount(){
        this.setState({
            api: window.location.href
        })    
    }
    getCode(){
        const codeapi = this.state.api
        let code = codeapi.replace("http://localhost:3000/?code=","")
        let fixcode = code.replace("&state=aRandomString","")
        const header = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
        const getHeader ={
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Authorization':"Bearer" + this.state.access_token,
            }
        } 
        axios.post("https://www.linkedin.com/oauth/v2/accessToken?client_id=81izf14qdfojgt&client_secret=yOAGHR1V3gz9W5y3&grant_type=authorization_code&redirect_uri=http://localhost:3000&code="+fixcode,null,header)
        .then(ress =>{
            this.setState({dataapi:ress.data.access_token})
            console.log("accses token : " +ress.data.access_token)
        })
        const url = "https://api.linkedin.com/v1/people/~:(first-name)?format=json";
        axios.get("https://api.linkedin.com/v1/people/~:(first-name)",getHeader).then(resss =>{
                console.log(resss.data)
           }).catch(err=>{
               console.log(err);
           })
        // jsonop("https://api.linkedin.com/v1/people/~:(first-name)",getHeader,(err,data)=>{
        //     if(err){
        //         console.log(err.message);
        //     }else{
        //         console.log(data);
        //     }
        // })
        console.log(this.state.dataapi)
    }
    render(){
        return(
            <div>
                <button onClick={this.getCode}>GET CODE</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
   
}
export default connect(mapStateToProps)(Callback);