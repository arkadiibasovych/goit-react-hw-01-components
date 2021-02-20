import React from 'react';
import reactDom from 'react-dom';
import './index.css';
import App from './App.jsx';




reactDom.render(<React.StrictMode>
  <App />
</React.StrictMode>, document.getElementById('root'));


// function randomColor() {
//   return 
// }

// backgroundColor: `rgb(${randomColor()},${randomColor()}, ${randomColor()})`
