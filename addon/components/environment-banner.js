import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
export default class EnvironmentBannerComponent extends Component {
  get environment() {
    return getOwner(this).resolveRegistration('config:environment');
  }
  get applicationVersion() {
    return this.environment.APP.packages[this.args.applicationName].version;
  }
}
