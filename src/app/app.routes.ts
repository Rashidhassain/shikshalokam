import { Routes } from '@angular/router';

import { DynmaicFormControlComponent } from './dynmaic-form-control/dynmaic-form-control.component';

export const routes: Routes = [


    {
        path:'',
        redirectTo:'/dynamic-form',
        pathMatch:'full'
    },
    {
        path:'dynamic-form',
        component:DynmaicFormControlComponent
    }
];
