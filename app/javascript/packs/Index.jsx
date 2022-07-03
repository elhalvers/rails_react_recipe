import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  const root = createRoot(container);
  root.render(<App />);
});
