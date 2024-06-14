import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ReproductionComponent extends Component {
  @tracked showEngine = false;

  @action
  toggleEngine() {
    this.showEngine = !this.showEngine;
  }
}
