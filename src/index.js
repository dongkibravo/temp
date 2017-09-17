import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from './app/containers/App';
import store from './app/store';
import axios from 'axios';

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
});

// store.dispatch((dispatch)=>{
//   dispatch({type:"FETCH_USERS_START"});
//   axios.get("http://rest.learncode.academy/api/wstern/users")
//     .then((response)=>{
//       dispatch({type: "RECEIVE_USERS", payload: response.data})
//     })
//     .catch((err)=>{
//       dispatch({type:"FETCH_USERS_ERROR",payload:err})
//     })
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);