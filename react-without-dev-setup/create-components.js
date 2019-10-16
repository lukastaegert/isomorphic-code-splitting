const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');

const numSmallComponents = 16;
const numMiddleComponents = 16;
const numLargeComponents = 8;

const createSmallComponent = (r, g, b) => {
    const code = `import {html, React} from '../../shared.js';

export default () => html\`
  <div style=$\{{backgroundColor: "rgb(${r * 256 / numLargeComponents},${g * 256 / numMiddleComponents},${b * 256 / numSmallComponents})"}}/>
\`;
`;
    const file = path.resolve(__dirname, `components/auto/Component${r}_${g}_${b}.js`);
    fs.writeFileSync(file, code);
};

const createMiddleComponent = (r, g) => {
    let code = `import {html, React} from '../../shared.js';\n`;
    for (let b = 0; b < numSmallComponents; b++) {
        createSmallComponent(r, g, b);
        code += `import Component${r}_${g}_${b} from './Component${r}_${g}_${b}.js';\n`
    }
    code += `\nexport default () => html\`<div style=$\{{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>\n`;
    for (let b = 0; b < numSmallComponents; b++) {
        code += `  <\${Component${r}_${g}_${b}} />\n`
    }
    code += `</div>\`;\n`;
    const file = path.resolve(__dirname, `components/auto/Component${r}_${g}.js`);
    fs.writeFileSync(file, code);
};

const createLargeComponent = (r) => {
    let code = `import {html, React} from '../../shared.js';\n`;
    for (let g = 0; g < numMiddleComponents; g++) {
        createMiddleComponent(r, g);
        code += `import Component${r}_${g} from './Component${r}_${g}.js';\n`
    }
    code += `\nexport default () => html\`<div style=$\{{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>\n`;
    for (let g = 0; g < numMiddleComponents; g++) {
        code += `  <\${Component${r}_${g}} />\n`
    }
    code += `</div>\`;\n`;
    const file = path.resolve(__dirname, `components/auto/Component${r}.js`);
    fs.writeFileSync(file, code);
};

const createParentComponent = () => {
    let code = `import {html, React} from '../../shared.js';\n`;
    for (let r = 0; r < numLargeComponents; r++) {
        createLargeComponent(r);
        code += `import Component${r} from './Component${r}.js';\n`
    }
    code += `\nexport default () => html\`<div style=$\{{width: "100vw", height: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>\n`;
    for (let r = 0; r < numLargeComponents; r++) {
        code += `  <\${Component${r}} />\n`
    }
    code += `</div>\`;\n`;
    const file = path.resolve(__dirname, `components/auto/ParentComponent.js`);
    fs.writeFileSync(file, code);
};


rimraf.sync(path.resolve(__dirname, 'components/auto'));
fs.mkdirSync(path.resolve(__dirname, 'components/auto'));
createParentComponent();
