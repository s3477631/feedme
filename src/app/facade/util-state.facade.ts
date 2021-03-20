import * as utilSelector from '../store/selectors/utils.selector';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {UtilsState} from '../store/state/utils.state';
import * as UtilActions from '../store/actions/utils.actions'

@Injectable({
    providedIn: 'root'
})
export class UtilStateFacade {
    constructor(private store: Store<UtilsState>) {
    }
    public showBackButton() {
        return this.store.pipe(select(utilSelector.utilSelector));
    }
    public backButton(showButton: boolean){
        this.store.dispatch(UtilActions.showBackMenu({showBack: showButton}));
    }
}
