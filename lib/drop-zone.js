'use strict';

const tt = require('onml/tt.js');
const genSvg = require('onml/gen-svg.js');

const accept = ['.vcd', '.lst', '.waveql', '.jsonl', '.ndjson'].join(',');

const openText = [
  ['text', {'text-anchor': 'middle', fill: 'url(#dropTextGradient)', y: -30}, 'Drop VCD file here to Open'],
  ['text', {'text-anchor': 'middle', fill: 'url(#dropTextGradient)', y:   0}, 'or Click'],
  ['text', {'text-anchor': 'middle', fill: 'url(#dropTextGradient)', y:  30}, 'or CTRL + O']
];

const wave = cfg => {
  const { width, height } = cfg;
  const body = ['g', tt(width >> 1, height >> 1, {})];

  const defs = ['defs',
    ['linearGradient', {
      id: 'dropTextGradient',
      x1: '0%',
      y1: '0%',
      x2: '100%',
      y2: '100%'
    },
      ['stop', {offset: '0%', 'stop-color': '#ca9194'}],
      ['stop', {offset: '100%', 'stop-color': '#853ecd'}]
    ]
  ];

  // use existing wave.svg as the background image instead of procedurally generated paths
  body.push(['image', {
    x: -width / 2,
    y: -height / 2,
    width: '100%',
    height: '100%',
    href: 'wave.svg',
    preserveAspectRatio: 'xMidYMid slice'
  }]);

  body.push(...openText);
  const input = ['input', {type: 'file', id: 'inputfile', accept, multiple: '', style: 'display:none'}];
  const svg = genSvg(width, height).concat([defs, body]);
  return ['div', {class: 'wd-progress', id: 'drop-zone'}, svg, input];
};

module.exports = wave;
