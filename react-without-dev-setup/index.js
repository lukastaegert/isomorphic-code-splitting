import App from './components/App.js';
import {html, React, ReactDOM} from './shared.js';

ReactDOM.render(
  html`<${App} />`,
  document.getElementById('root')
);
