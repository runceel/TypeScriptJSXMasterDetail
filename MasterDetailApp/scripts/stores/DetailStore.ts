import * as FluxUtils from 'flux/utils';
import MasterDetailDispatcher from './../dispatcher/MasterDetailDispatcher';
import * as Models from './../stores/Models';
import * as Actions from './../actions/Actions';
import MasterStore from './MasterStore';

class DetailStore extends FluxUtils.Store {
    private person: Models.Person;

    getPerson() {
        return this.person;
    }

    __onDispatch(action: any) {
        if (action instanceof Actions.SetDetailAction) {
            this.person = (action as Actions.SetDetailAction).person;
            this.__emitChange();
        }
    }
}

export default new DetailStore(MasterDetailDispatcher);