import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DateManagerComponent extends Component {
    @tracked currentName;

    @action
    changedName(eventObject){
        this.currentName = eventObject.target.value;
    }
}
