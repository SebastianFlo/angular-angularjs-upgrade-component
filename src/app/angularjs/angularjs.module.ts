import * as angular from 'angular';
import 'angular-route';

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

angularJsApp.component('angularJsA', {
    controller: class AngularJsAController {
        counter: any;
        redux: any = {};
        increaseCounter;
        decreaseCounter;
        constructor() { }
    },
    template: `
    ANGULARJS RENDERED a/ng1
      <div>
        <a href="/a/ng2">ANGULAR A</a>
        <a href="/b/ng2">ANGULAR B</a>
        <a href="/a/ng1">AngularJs A</a>
        <a href="/b/ng1">AngularJs B</a>
      </div>
  `
});

angularJsApp.component('angularJsB', {
    controller: class AngularJsBController {
        constructor() { }
    },
    template: `
  ANGULARJS RENDERED b/ng1
  <div>
    <a href="/a/ng2">ANGULAR A</a>
    <a href="/b/ng2">ANGULAR B</a>
    <a href="/a/ng1">ANGULARJS A</a>
    <a href="/b/ng1">ANGULARJS B</a>
  </div>
  `
});
