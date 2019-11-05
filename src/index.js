import React from 'react';
import App from "./App";
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";



  ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App store={store}/>
      </Provider>
    </HashRouter>, document.getElementById('root'));





