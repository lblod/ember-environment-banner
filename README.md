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
  @applicationUrl='https://example.com'
/>
```
The component expects one argument - `@applicationUrl` - which is the url of the application.

The component extracts the values for `appName`, and `environment` from the _environment.js_ file.

The banner automatically extracts the installed version of the installed application and displays it.
If any @lblod/ember-rdfa-editor packages are installed (the editor itself or plugins), the banner also extracts their versions and displays them in a modal.

Future work could include providing a custom package path to the banner so it not solely extracts versions for the @lblod/ember-rdfa-editor packages.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
