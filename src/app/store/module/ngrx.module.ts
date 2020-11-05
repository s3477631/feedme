import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './../reducers';
import { AppEffects } from '../effects/index';

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot(
            reducers,
            {
                metaReducers,
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
        EffectsModule.forRoot( AppEffects ),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: false
        }),
    ],
    exports: [
        StoreModule,
        StoreDevtoolsModule,
        EffectsModule,
    ]
})
export class NgrxModule { }
