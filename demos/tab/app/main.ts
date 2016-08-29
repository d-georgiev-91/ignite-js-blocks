/// <reference path="../../../typings/globals/node/index.d.ts" />
import {Component, ViewChild} from '@angular/core';
import * as Infragistics from '../../../src/main';

@Component({
    selector: 'demo-app',
    moduleId: module.id, // commonJS standard
    templateUrl: "main.html",
    directives: [
        Infragistics.Button,
        Infragistics.Icon,
        //Infragistics.Header,
        //Infragistics.Item,
        //Infragistics.List,
        Infragistics.TabBar,
        Infragistics.Tab
    ]
})

export class AppComponent {
    datasource: Array<Object> = [
        { text: "Nav1", link: "#" },
        { text: "Nav2", link: "#" },
        { text: "Nav3", link: "#" },
        { text: "Nav4", link: "#" }
      ];
}