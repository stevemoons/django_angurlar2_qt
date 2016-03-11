import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { BlogComponent } from './blog/blog.ts';
import { Blog2Component } from './blog/blog.component.ts';


@Component({
    selector: 'my-app',
    templateUrl: '/static/base.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: '/blog',
        name: 'Blog',
        component: BlogComponent
        //useAsDefault: true
    },
    {
        path: '/blog2',
        name: 'Blog2',
        component: Blog2Component
        //useAsDefault: true
    }
])

export class AppComponent {
    title = 'test-app';
}

