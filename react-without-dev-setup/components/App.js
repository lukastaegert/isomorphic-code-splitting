import Counter from './Counter.js';
import LazyComponentLoader from './LazyComponentLoader.js';
import {React, html} from '../shared.js';

export default () => html`
  <div>
    <${Counter} count="1" />
    <${LazyComponentLoader} />
  </div>
`;
