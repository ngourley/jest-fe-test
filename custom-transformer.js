// custom-transformer.js
'use strict';

const {transform} = require('@babel/core');
const jestPreset = require('babel-preset-jest');

function generateExport(code) {
  const _exports = [];

  code.split("\n").map((line) => {
        const beforeComment = line.trimStart().split("//").slice(0,1).join();
        const match = beforeComment.match(/window.(\w+).*=(.*)/);

        if (!match) return line;

        const output = match[1];
        let input = match[2]

        input = input.trimStart().trimEnd();
        const inputTokens = input.match(/[0-9a-zA-Z]{1,}/g);
        input = inputTokens[inputTokens.length - 1];

        _exports.push({input, output});

        return line;
    });

    if (_exports.length === 0) return code
    let addition = `export { \n`;
    for (const _export of _exports) {
        addition += `    ${_export.input} as ${_export.output},\n`;
    }
    addition += '}\n';
  return `${code}\n${addition}`;

}

module.exports = {
  process(src, filename) {

    // Inject export statements
    // when window assignment occurs
    src = generateExport(src);

    const result = transform(src, {
      filename,
      presets: [jestPreset],
    });

    console.log(result.code)

 
    return result ? result.code : src;
  },
};