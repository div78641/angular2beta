import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'heart-icon',
    templateUrl: 'app/heart-icon.template.html',
    styles: [`
        .grey-heart {color:#ccc;}
        .pink-heart {color:deeppink;}
    `]
})

export class HeartIconComponent {
    @Input('is-selected') isSelected: boolean = false;
    @Output() change = new EventEmitter();
    likeCount: number = 25;

    onClick(){
        this.isSelected = !this.isSelected;
        this.likeCount = (this.isSelected) ? this.likeCount + 1 : this.likeCount - 1;
        this.change.emit({ newValue: this.isSelected });
    }
}