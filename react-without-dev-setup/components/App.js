import {html, React} from '../shared.js';
import Counter from './Counter.js';
import LazyComponentLoader from './LazyComponentLoader.js';
import Title from './Title.js';

export default () => html`
  <div>
    <${Title} />
    <${Counter} count="1" />
    <${LazyComponentLoader} />
  </div>
`;
