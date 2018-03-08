import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-angular-component',
  template: `ANGULAR RENDERED {{ url | async }}
    <div>
      <a routerLink='/a/ng2'>ANGULAR A</a>
      <a routerLink='/b/ng2'>ANGULAR B</a>
      <a routerLink='/a/ng1'>ANGULARJS A</a>
      <a routerLink='/b/ng1'>ANGULARJS B</a>
    </div>
  `
})
export class AngularComponent {
  url: Observable<string> = this.route.url.map(p => p.map(s => s.path).join('/'));

  constructor(private route: ActivatedRoute) {}

}
