import * as Models from './../stores/Models';
import * as Actions from './../actions/Actions';
import MasterDetailDispatcher from './../dispatcher/MasterDetailDispatcher';
import BrowserHistory from './BrowserHistory';
import PeopleWebAPIUtils from './../utils/PeopleWebAPIUtils';


class DetailActionCreator {
    select(id: number) {
        PeopleWebAPIUtils.get(id).then(x => {
            MasterDetailDispatcher.dispatch(new Actions.SetDetailAction(x));
        });
    }

    update(target: Models.Person) {
        PeopleWebAPIUtils.update(target).then(_ => {
            BrowserHistory.goBack();
        });
    }
}

export default new DetailActionCreator();