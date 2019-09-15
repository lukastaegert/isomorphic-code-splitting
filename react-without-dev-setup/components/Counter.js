import {React, html, css} from '../shared.js';

const styles = css`
  display: flex;
  align-items: center;
`;

export default ({count: initialCount}) => {
  const [count, setCount] = React.useState(parseInt(initialCount));

  return html`
    <div className=${styles}>
      <button onClick="${() => setCount(count - 1)}">Decrement</button>
      <h1>${count}</h1>
      <button onClick="${() => setCount(count + 1)}">Increment</button>
    </div>
  `;
};
