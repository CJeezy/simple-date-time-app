import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class DateAndTimeComponent extends Component {
    @tracked dateData = null;
    @tracked timeData = null;
    @tracked refreshCount = 0;

    constructor(){
        super(...arguments);
        this.getDate();
    }

    getDate(){
        this.dateData = Date();
    }

    @action
    refreshTime(){
        this.refreshCount += 1;
        this.dateData = null;
        this.getDate();
    }

}
