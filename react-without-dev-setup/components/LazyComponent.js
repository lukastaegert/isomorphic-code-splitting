import {React, html, css} from '../shared.js';

const styles = css`
  font-size: 30px;
  position: relative;
  text-align: center;
  animation: slidein 1s ease-out;
  
  @keyframes slidein {
    from {
      left: -600px;
      opacity: 0;
      transform: rotate(1turn)
    }
    to {
      left: 0px;
      opacity: 1
    }
  }
`;

export default () => html`
  <div className=${styles}>I am here 🧞‍♂️<br />when you need me</div>
`;
