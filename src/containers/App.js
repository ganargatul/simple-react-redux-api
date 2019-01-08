import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from '../components/Main';
import User from '../components/User';
import {connect} from 'react-redux';
class App extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state ={
        name: ""
    }
    
  }
  handleChange(event) {
    this.setState({name: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} value={this.state.name}></input>
        <Main changeUsername={()=>this.props.setEmail(this.state.name)} />
        <User username={this.props.user.email}/>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
   setEmail:(email) => {
     dispatch({
        type:"SET_EMAIL",
        payload:email
     })
   }
  };
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
