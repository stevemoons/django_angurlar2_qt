import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Blog } from './blog.model'

import { BlogService } from './blog.service.ts';

@Component({
    selector: 'my-blog2',
    templateUrl: '/static/app/blog/blog.component.html',
    //styleUrls:  [],
    //directives: [directives],
    providers: [BlogService]
})
export class Blog2Component implements OnInit {
    a = "aaaa";
    heros = ['a', 'b'];

    constructor(
        private _router: Router,
        private _blogService: BlogService) { }

    getBlogs() {
        console.log("test");
    }

    ngOnInit() {
        this.getBlogs();
    }

    testBlog(){
        console.log("test2");
    }
}
