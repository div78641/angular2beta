import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'star-icon',
    templateUrl: 'app/star-icon.template.html',
    styles: [`.glyphicon-star {
        color:orange;
    }`]
})
export class StarIconComponent{
    @Input() isActive: boolean = false;

    @Output() change = new EventEmitter();

    onClick(){
        this.isActive = !this.isActive;
        this.change.emit({ newValue: this.isActive });
    }
}