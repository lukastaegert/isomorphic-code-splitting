import {css, html, React} from '../shared.js';

const styles = css`
  text-align: center
`;

export default () => html`
  <h1 className=${styles}>
    React without a build step
  </h1>
`;
