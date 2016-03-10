import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { BlogComponent } from './blog.ts';


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
    }
])

export class AppComponent {
    title = 'test-app';
}

