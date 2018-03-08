import * as angular from 'angular';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { setUpLocationSync } from '@angular/router/upgrade';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { setAngularLib, UpgradeModule } from '@angular/upgrade/static';

// AngularJs
import { angularJsApp } from './angularjs/angularjs.module';

// Angular
import { ng1Matcher } from './utils';
import { AppComponent } from './angular/app.component';
import { AngularComponent } from './angular/angular.component';
import { EmptyComponent } from './angular/empty.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot([
      { path: '', component: AngularComponent },
      { path: 'a/ng2', component: AngularComponent },
      { path: 'b/ng2', component: AngularComponent },
      { matcher: ng1Matcher, component: EmptyComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(upgrade: UpgradeModule) {
    setTimeout(() => {
      setAngularLib(angular);
      upgrade.bootstrap(document.body, [angularJsApp.name]);
      setUpLocationSync(upgrade);
    });
  }
}

