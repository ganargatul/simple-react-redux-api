import React, { Component } from 'react';
import '../containers/App.css';
import axios from 'axios';
import {connect} from 'react-redux';
class Register extends Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.state={
            email: "",
            name: "",
            password:"",
        }
    }
    handleRegister(ev){
       ev.preventDefault()
       const nama=this.state.name;
       const email= this.state.email;
       const password = this.state.password;
       const data ={
           nama,
           email,
           password
       }
       axios.post("c",data).then(res=>{
            console.log(res);
       })
    }
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }
    render(){
        return(
            <div>
            <input type="text" placeholder="Name" onChange={this.handleChange} value={this.state.name} name="name" ></input>
            <input type="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} name="email"></input>
            <input type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} name="password"></input>
            <button onClick={this.handleRegister} >Register</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
   
}
export default connect(mapStateToProps)(Register);