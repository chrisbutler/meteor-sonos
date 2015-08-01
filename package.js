Package.describe({
  summary: "Node.js Sonos Interface",
  version: '3.2.0',
  name: "chrisbutler:sonos",
  git: "https://github.com/chrisbutler/meteor-sonos"
});

Npm.depends({
  'sonos': "0.8.0",
});

Package.onUse(function (api) {
  api.addFiles([
    'lib/sonos.js',
  ], ['server']);

  api.export([
    'sonos'
  ]);
});
