import { UIRouterModule , UIRouter} from "ui-router-ng2";
import {Injector, Injectable} from "@angular/core";
//import {visualizer} from "ui-router-visualizer";

import { LoginComponent } from "app/auth/login/login.component";

function uiRouterConfigFn(router: UIRouter, injector: Injector) {
    // If no URL matches, go to the `hello` state by default
    router.urlService.rules.otherwise({ state: 'login' });

    // Use ui-router-visualizer to show the states as a tree
    // and transitions as a timeline
    //visualizer(router);
}

const Routes = UIRouterModule.forRoot({
    states: [
        { name: 'login', url: '/login', component: LoginComponent }
    ],
    useHash: true,
    config: uiRouterConfigFn
})


export default Routes;
