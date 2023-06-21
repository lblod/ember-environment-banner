# @lblod/ember-environment-banner

This ember addon is an implementation of an environment banner which is to be used in different LBLOD applications.
It provides an Ember component which adds a banner to your page.


## Compatibility

* Ember.js v3.28 or above
* Ember CLI v3.28 or above
* Node.js v16 or above


## Installation

```
ember install ember-environment-banner
```


## Usage

You can add an instance of the environment banner to your page this way:
```hbs
<EnvironmentBanner
  @applicationName='Ember Environment Banner'
  @environmentName={{this.environmentName}}
  @skin={{@skin}}
  @message={{@message}}
/>
```
The component expects two, and accepts three arguments:
* `@applicationName` - the application name which should be displayed in the banner.
* `@environmentName` - the environment name, which should be displayed in the banner.
* `@message` - a string that can be written in the _application.hbs_ file, or can be configured in the application controller (optional).
* `@skin` - a skin that can be added as a string (skin name) in the _application.hbs_ file, or can be configured in the application controller (optional).

The banner automatically extracts the version of the host app and displays it.
Additionally, the banner can also display installed packages and their versions through a modal.
You can configure which packages are shown by providing a list of glob patterns to the addon. The addon can be configure in the `config/environment.js` file of your host app.

Example of such a configuration:
```js
'@lblod/ember-environment-banner': {
      paths: ['ember*'],
},
```
The above example config will allow the addon to pick up packages that start with `ember`.

By default, the environment-banner displays the  `@lblod/ember-rdfa-editor` packages.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
