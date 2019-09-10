import {html, React} from '../setup/setup.js';

export const Counter = props => {
    const [count, setCount] = React.useState(parseInt(props.count));
    return html`
    <div>
      <h1>${count}</h1>
      <button onClick="${() => setCount(count - 1)}">Decrement</button>
      <button onClick="${() => setCount(count + 1)}">Increment</button>
    </div>
    `;
};
