ember-environment-banner
==============================================================================

This ember addon is an implementation of an environment banner which is to be used in different LBLOD applications.
It provides an Ember component which adds a banner to your page.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.28 or above
* Ember CLI v3.28 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-environment-banner
```


Usage
------------------------------------------------------------------------------

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

The banner automatically extracts the installed version of the installed application and displays it.
If any @lblod/ember-rdfa-editor packages are installed (the editor itself or plugins), the banner also extracts their versions and displays them in a modal.

Future work could include providing a custom package path to the banner so it not solely extracts versions for the @lblod/ember-rdfa-editor packages.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
