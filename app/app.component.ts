import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {StarIconComponent} from './star-icon.component';
import {HeartIconComponent} from './heart-icon.component';
import {VoterComponent} from './vote.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
    <courses></courses><authors></authors>
    <h2>Star</h2>
    <star-icon [isActive]="post.isActive" (change)="onStarIconChange($event)"></star-icon>
    <h2>Heart/Like</h2>
    <heart-icon></heart-icon>
    <h2>Stackoverflow Voter</h2>
    <voter></voter>`,
    directives: [CoursesComponent, AuthorsComponent, StarIconComponent, HeartIconComponent, VoterComponent]
})
export class AppComponent { 
    post = { title: "Title", isActive: true}

    onStarIconChange($event){
        console.log($event);
    }
}