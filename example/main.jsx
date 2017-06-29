import 'roboto-fontface/css/roboto/roboto-fontface.css';
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './main.css';
import App from './components/App';


injectTapEventPlugin();


render(
  <App />,
  document.getElementById('root'),
);
