import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class DateAndTimeComponent extends Component {
    @tracked dateData = null;
    @tracked CETData = null;
    @tracked refreshCount = 0;

    constructor(){
        super(...arguments);
        this.getDate();
    }

    getDate(){
        this.dateData = new Date().toLocaleString();
        this.CETData = new Date(new Date().toLocaleString("en-us",{timeZone: "Europe/Paris"})).toLocaleString();
    }


    @action
    refreshTime(){
        this.refreshCount += 1;
        this.dateData = null;
        this.getDate();
    }

}
