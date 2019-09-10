import {Counter} from './components/Counter.js';
import {html, ReactDOM} from './setup.js';

ReactDOM.render(
    html`
    <${Counter} count="1" />
    `,
    document.getElementById('root')
);
