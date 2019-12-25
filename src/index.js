import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app/index";
import { BrowserRouter as Router } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
//reducers
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}><Router><App /></Router></Provider>, document.getElementById('root'));