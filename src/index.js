import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';
import Main from './Components/Main';
import Footer from './Components/Footer/Footer';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// const root = createRoot(document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-r5itixwgr3xiwf7g.us.auth0.com"
      clientId="LRK1NQWFk55Er9KwZkMVSPoZ8cblKmNT"
      
        redirectUri = {window.location.origin}>
          
          {/* <Main> */}
          
          <App />
          {/* <Footer/>
          </Main> */}
      
    
      
    </Auth0Provider>,
  );
