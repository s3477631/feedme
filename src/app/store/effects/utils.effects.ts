import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';

import * as UtilsActions from '../actions/utils.actions';

@Injectable()
export class UtilsEffects {
    public loadDrinkMenuGroupList$ = createEffect(() => this.actions.pipe(
        ofType(UtilsActions.showBackMenu),
            map((action) => UtilsActions.showBackMenuSuccess({showBackMenu: action.showBack})),
    ));
    constructor(private actions: Actions) {
    }

}
