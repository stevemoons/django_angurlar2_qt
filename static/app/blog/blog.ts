import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-blog',
    templateUrl: '/static/blog.html'
})
export class BlogComponent {
    test = "test";
}

//export interface Hero {
//    id: number;
//    name: string;
//    test: string;
//}