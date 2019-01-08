import React, { Component } from 'react';
import '../containers/App.css';
import {connect} from 'react-redux';
import setNews from '../actions/fetchNews'
class News extends Component {
  componentDidMount(){
    this.props.setNews();
  }
  render() {
    if(this.props.fetchednews.fetching){
      return(
      <div className="App">
        <text>LOADING....</text>
      </div>
      );
    }    
    return (
      <div>
         <ul>
            {this.props.data && this.props.data.map((news, key) =>
            <li key={key}>
            {news.title}
            <br></br>
            <br></br>
            <p>{news.body}</p>
            </li>
            )}
          </ul>

      </div>
    );
  }
}

export default News;