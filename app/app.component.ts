import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarIconComponent} from './star-icon.component';
import {HeartIconComponent} from './heart-icon.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
    <courses></courses><authors></authors>
    <star-icon [isActive]="post.isActive" (change)="onStarIconChange($event)"></star-icon>
    <heart-icon></heart-icon>`,
    directives: [CoursesComponent, AuthorsComponent, StarIconComponent, HeartIconComponent]
})
export class AppComponent { 
    post = { title: "Title", isActive: true}

    onStarIconChange($event){
        console.log($event);
    }
}