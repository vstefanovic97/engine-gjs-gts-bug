const { buildEngine } = require('ember-engines/lib/engine-addon');

module.exports = buildEngine({
  name: 'engine-foo',
  lazyLoading: {
    enabled: false,
  },
});
