import {React, html, css} from '../shared.js';

const styles = css`
  display: flex;
  align-items: center;
`;

export const Counter = props => {
  const [count, setCount] = React.useState(parseInt(props.count));

  return html`
    <div className=${styles}>
      <button onClick="${() => setCount(count - 1)}">Decrement</button>
      <h1>${count}</h1>
      <button onClick="${() => setCount(count + 1)}">Increment</button>
    </div>
  `;
};
