import {css, html, React} from '../shared.js';

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  
  .count {
    margin: 0;
    font-size: 36px;
    font-weight: bold;
  }
`;

export default ({count: initialCount}) => {
  const [count, setCount] = React.useState(parseInt(initialCount));

  return html`
    <div className=${styles}>
      <button onClick="${() => setCount(count + 1)}">Increment</button>
      <div className="count">${count}</div>
      <button onClick="${() => setCount(count - 1)}">Decrement</button>
    </div>
  `;
};
