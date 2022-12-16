import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]'
);

export default class EnvironmentBannerComponent extends Component {
  @tracked
  showModal = false;

  get environment() {
    return getOwner(this).resolveRegistration('config:environment');
  }
  
  get environmentValues() {
    let value;
    let values = isLocalhost
      ? 'local'
      : this.environment.environmentName;
    switch (values) {
      case 'test':
        return value = {
          env: 'test',
          title: 'tesstomgeving',
          skin: 'warning'
        }
      case 'development':
        return value = {
          env: 'development',
          title: 'ontwikkelomgeving',
          skin: 'success'
        }
      case 'local':
        return value = {
          env: 'local',
          title: 'lokale omgeving',
          skin: 'error'
        }
      default:
        return value = {
          env: '',
          title: '',
          skin: 'muted'
        }
    }
  }
  
  get applicationName() {
    return this.environment.appName;
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
