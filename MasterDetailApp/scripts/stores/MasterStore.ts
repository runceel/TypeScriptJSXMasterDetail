import * as FluxUtils from 'flux/utils';
import MasterDetailDispatcher from './../dispatcher/MasterDetailDispatcher';
import * as Models from './Models';
import * as Actions from './../actions/Actions';

class MasterStore extends FluxUtils.Store {
    private people: Models.Person[] = [];

    private peopleCount: number = 0;

    private page: number = 0;

    private pageSize: number = 20;

    getPeople() {
        return this.people;
    }

    getPeopleCount() {
        return this.peopleCount;
    }

    getPage() {
        return this.page;
    }

    getPageSize() {
        return this.pageSize;
    }

    __onDispatch(action: any) {
        if (action instanceof Actions.SetMasterAction) {
            this.people = (action as Actions.SetMasterAction).people;
            this.__emitChange();
        }
        if (action instanceof Actions.SetPeopleCountAction) {
            this.peopleCount = (action as Actions.SetPeopleCountAction).count;
            this.__emitChange();
        }
        if (action instanceof Actions.SetPageActoin) {
            this.page = (action as Actions.SetPageActoin).page;
            this.__emitChange();
        }
        if (action instanceof Actions.SetPageSizeAction) {
            this.pageSize = (action as Actions.SetPageSizeAction).pageSize;
            this.__emitChange();
        }
    }
}

export default new MasterStore(MasterDetailDispatcher);
