import {React, ReactDOM} from './node_modules/es-react/index.js';
import htm from './node_modules/htm/dist/htm.mjs';

export {React, ReactDOM} from './node_modules/es-react/index.js';
export const html = htm.bind(React.createElement);
