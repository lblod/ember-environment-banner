import Component from '@glimmer/component';
import { getOwner } from '@ember/application';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class PackagesOverviewComponent extends Component {
  get environment() {
    return getOwner(this).resolveRegistration('config:environment');
  }

  @tracked
  showModal = false;
  get packages() {
    return this.environment.APP.packages;
  }

  @action
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
