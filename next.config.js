const isEmpty = require('lodash/isEmpty');

let tmpConfig = {
  sassOptions: {
    outputStyle: 'compressed',
  },
};

if (inDebugMode()) {
  tmpConfig = Object.assign(tmpConfig, {
    env: {
      DEBUG: process.env.DEBUG,
    },
  });
}

function inDebugMode() {
  return !isEmpty(process.env.DEBUG);
}

module.exports = tmpConfig;
