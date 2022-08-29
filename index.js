'use strict';

const fs = require('fs');
const path = require('path');
function isUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (e) {
    return false;
  }
}

function extractRepoUrl(pjson) {
  const repo = pjson.repository;
  let url;
  if (typeof repo === 'string') {
    url = repo.replace('git+', '');
  } else if (typeof repo === 'object') {
    url = repo?.url?.replace('git+', '');
  }
  if (url && isUrl(url)) {
    return url;
  }
}
function getPackages(projectPath) {
  const mainPjson = require(path.join(projectPath, 'package.json'));
  const packages = {
    [mainPjson.name]: {
      version: mainPjson.version,
      url: extractRepoUrl(mainPjson),
    },
  };
  try {
    const dirs = fs
      .readdirSync(path.join(projectPath, 'node_modules/@lblod'))
      .filter((dir) => dir.startsWith('ember-rdfa-editor'));
    dirs.forEach((dir) => {
      const file = path.join(
        projectPath,
        `node_modules/@lblod/${dir}/package.json`
      );
      const pjson = require(file);
      packages[pjson.name] = {
        version: pjson.version,
        url: extractRepoUrl(pjson),
      };
    });
  } catch (e) {
    console.error(e);
  }
  return packages;
}

module.exports = {
  name: require('./package').name,
  included: function (/* app */) {
    this._super.included.apply(this, arguments);
  },
  config(_env, baseConfig) {
    let config = this._super.config.apply(this, arguments);

    if (!baseConfig.APP) {
      return config;
    }

    baseConfig.APP.packages = getPackages(this.project.root);

    return config;
  },
};
