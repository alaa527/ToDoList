import React from 'react';
import  {BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.min.js"
 import "@fortawesome/fontawesome-free/css/all.min.css"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<App />
</BrowserRouter>

);


