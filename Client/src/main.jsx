import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ApiContext from './Components/Context/ApiContext'
import { BrowserRouter } from 'react-router-dom'
import store from './Components/Redux/Store.js'
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <ApiContext>  
        <App />
    </ApiContext>
  </Provider>
  </BrowserRouter>
)
