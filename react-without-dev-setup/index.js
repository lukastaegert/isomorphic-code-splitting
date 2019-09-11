import {Counter} from './components/Counter.js';
import LazyComponentLoader from './components/LazyComponentLoader.js';
import {React, ReactDOM, html, css} from './shared.js';

const styles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

ReactDOM.render(
  html`
    <div className=${styles}>
      <${Counter} count="1" />
      <${LazyComponentLoader} />
    </div>
  `,
  document.getElementById('root')
);
