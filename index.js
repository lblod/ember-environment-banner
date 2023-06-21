'use strict';

const path = require('path');
// eslint-disable-next-line n/no-extraneous-require
const { GlobSync } = require('glob');

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
function getPackages(basePath, paths = ['@lblod/ember-rdfa-editor*']) {
  const packages = {};
  paths.forEach((p) => {
    const g = new GlobSync(
      path.join(basePath, 'node_modules', p, 'package.json')
    );
    const files = g.found;
    files.forEach((file) => {
      const pjson = require(file);
      packages[pjson.name] = {
        version: pjson.version,
        url: extractRepoUrl(pjson),
      };
    });
  });
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
    baseConfig.APP.packages = getPackages(
      this.project.root,
      baseConfig[this.name]?.paths
    );
    return config;
  },
};
