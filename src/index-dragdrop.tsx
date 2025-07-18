import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DragDropDemo from './DragDropDemo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <DragDropDemo />
  </React.StrictMode>
);