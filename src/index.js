import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./component/context/ContextProvider";
import './component/chat'


ReactDOM.render(

  <ContextProvider>
  
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

    </ContextProvider>

  ,
  document.getElementById('root')
);


