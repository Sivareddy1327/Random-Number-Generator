import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import configurationStore from './store/configurationStore'

const store = configurationStore()

console.log(store)
console.log(store.getState())
store.subscribe(()=>{
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);


