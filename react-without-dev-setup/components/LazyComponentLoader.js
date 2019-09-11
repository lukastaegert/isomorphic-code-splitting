import {React, html, css} from '../shared.js';

const LazyComponent = React.lazy(() => import('./LazyComponent.js'));

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => {
  const [componentShown, setComponentShown] = React.useState(false);

  return html`
  <div className=${styles}>
    ${(componentShown ? html`
      <${React.Suspense} fallback=${html`<div>Loading...</div>`}>
        <${LazyComponent} />
      <//>
    ` : html`
      <button onClick="${() => setComponentShown(true)}">Show Lazy Component</button>
    `)}
  </div>
  `;
};
