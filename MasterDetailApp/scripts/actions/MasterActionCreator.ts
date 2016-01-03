import MasterDetailDispatcher from './../dispatcher/MasterDetailDispatcher';
import * as Actions from './Actions';
import PeopleWebAPIUtils from './../utils/PeopleWebAPIUtils';

class MasterActionCreator {
    load(pageSize: number, skip: number) {
        return PeopleWebAPIUtils.load(pageSize, skip)
            .then(x => {
                MasterDetailDispatcher.dispatch(new Actions.SetMasterAction(x));
                return x;
            });
    }

    count() {
        PeopleWebAPIUtils.count().then(x => MasterDetailDispatcher.dispatch(new Actions.SetPeopleCountAction(x)));
    }

    setPage(page: number) {
        MasterDetailDispatcher.dispatch(new Actions.SetPageActoin(page));
    }

    setPageSize(pageSize: number) {
        MasterDetailDispatcher.dispatch(new Actions.SetPageSizeAction(pageSize));
    }
}

export default new MasterActionCreator();