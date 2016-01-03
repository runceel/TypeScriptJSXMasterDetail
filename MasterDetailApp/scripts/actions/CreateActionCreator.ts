import * as Models from './../stores/Models';
import PeopleWebAPIUtils from './../utils/PeopleWebAPIUtils';
import BrowserHistory from './BrowserHistory';
import MasterActionCreator from './MasterActionCreator';

class CreateActionCreator {
    create(p: Models.Person) {
        PeopleWebAPIUtils.insert(p).then(_ => {
           MasterActionCreator.count();
           BrowserHistory.goBack();
        });
    }
}

export default new CreateActionCreator();
