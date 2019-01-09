import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import userReducer from './reducers/userReducer'
import store from './store'
import News from './containers/News';
import Register from './screens/Register'
import Linkedin from './screens/Linkedin';
import Callback from './screens/Callback';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';



ReactDOM.render(
    <Router>
        <Provider store={store}>
           <Route exact path="/" component={Callback} />
           <Route exact path="/register" component={Register} />
           <Route exact path="/linked" component={Linkedin} />
           <Route exact path="/Callback" component={News} />
        </Provider>
    </Router>
   
    ,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
