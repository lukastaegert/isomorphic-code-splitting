import Counter from './Counter.js';
import LazyComponentLoader from './LazyComponentLoader.js';
import {React, html, css} from '../shared.js';

const styles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default () => html`
  <div className=${styles}>
    <${Counter} count="1" />
    <${LazyComponentLoader} />
  </div>
`;
