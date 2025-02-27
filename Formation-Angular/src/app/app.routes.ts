import { Routes } from '@angular/router';
import { RoutingPremierComponent } from './routing-premier/routing-premier.component';
import { RoutingSecondComponent } from './routing-second/routing-second.component';
import { RoutingThirdComponent } from './routing-third/routing-third.component';

export const routes: Routes = [
    {path : "first/:id", component : RoutingPremierComponent},
    {path : "second", component : RoutingSecondComponent, children : [
        {path : "third", component : RoutingThirdComponent}
    ]}
];
