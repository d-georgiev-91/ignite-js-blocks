/// <reference path="../../../typings/globals/node/index.d.ts" />
import {Component, ViewChild} from '@angular/core';
import * as Infragistics from '../../../src/main';

@Component({
    selector: 'demo-app',
    moduleId: module.id, // commonJS standard
    templateUrl: "main.html",
    directives: [
        //Infragistics.Button,
        //Infragistics.Icon,
        Infragistics.TabBar,
        Infragistics.Tab
    ]
})

export class AppComponent {

      selectTab(args) {
        console.log("index: " + args.index);
        console.log("tab: " + args.tab);
      }
}
