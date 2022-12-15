import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' || window.location.hostname === '[::1]'
);

export default class EnvironmentBannerComponent extends Component {
  @tracked
  showModal = false;

  get environment() {
    return getOwner(this).resolveRegistration('config:environment');
  }

  get packages() {
    return this.environment.APP.packages;
  }

  get showPackages() {
    return Object.keys(this.packages).length !== 0;
  }

  @action
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
