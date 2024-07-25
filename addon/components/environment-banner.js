import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import { helper } from '@ember/component/helper';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { dependencySatisfies, macroCondition } from '@embroider/macros';
import { importSync } from '@embroider/macros';
const InfoCircleIcon = macroCondition(
  dependencySatisfies('@appuniversum/ember-appuniversum', '>=3.4.1')
)
  ? importSync('@appuniversum/ember-appuniversum/components/icons/info-circle')
      .InfoCircleIcon
  : 'info-circle';

const or = helper(function ([a, b]) {
  return a || b;
});

export default class EnvironmentBannerComponent extends Component {
  InfoCircleIcon = InfoCircleIcon;
  or = or;

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
