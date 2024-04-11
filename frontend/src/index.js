import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; 
import './index.css';
import reportWebVitals from './reportWebVitals';

//Redux 
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
