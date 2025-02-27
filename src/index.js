import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductivityCalendar from './components/ProductivityCalendar';
import './styles.css';  // Add this line to import the styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductivityCalendar />
  </React.StrictMode>
);