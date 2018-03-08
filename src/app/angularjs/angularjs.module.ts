import * as angular from 'angular';
import 'angular-route';

import { AngularJsAComponent } from './angularjsA.component';
import { AngularJsBComponent } from './angularjsB.component';

export const angularJsApp = angular.module('angularJsApp', ['ngRoute']);

angularJsApp.config(($locationProvider, $routeProvider) => {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/a/ng1', {
        template: '<angular-js-a></angular-js-a>'
    });
    $routeProvider.when('/b/ng1', {
        template: '<angular-js-b></angular-js-b>'
    });
    $routeProvider.otherwise({ template: '' });
});

angularJsApp.component('angularJsA', AngularJsAComponent);

angularJsApp.component('angularJsB', AngularJsBComponent);
