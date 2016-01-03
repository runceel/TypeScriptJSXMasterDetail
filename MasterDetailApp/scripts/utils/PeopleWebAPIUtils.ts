/// <reference path="../../typings/flux/flux.d.ts" />
import * as Models from './../stores/Models';

function getContextPath() {
    return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
}

class PeopleWebAPIUtils {
    loadAll() {
        return fetch(getContextPath() + '/api/People', {
            headers: {
                'Accept-Type': 'application/json'
            }
        }).then(x => x.json())
            .then(x => x as Models.Person[]);
    }

    load(pageSize: number, skip: number) {
        return fetch(getContextPath() + '/api/People?pageSize=' + pageSize + '&skip=' + skip, {
            headers: {
                'Accept-Type': 'application/json'
            }
        }).then(x => x.json())
            .then(x => x as Models.Person[]);
    }

    get(id: number) {
        return fetch(getContextPath() + '/api/People/' + id, {
            headers: { 'Accept-Type': 'application/json' }
        }).then(x => x.json())
            .then(x => x as Models.Person);
    }

    count() {
        return fetch(getContextPath() + '/api/People/Count', {
            headers: { 'Accept-Type': 'application/json' }
        }).then(x => x.json())
            .then(x => x as number);
    }

    insert(p: Models.Person) {
        fetch(getContextPath() + '/api/People', {
            headers: {
                'Accept-Type': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(p)
        }).then(x => x.json())
            .then(x => x as Models.Person);
    }

    update(p: Models.Person) {
        return fetch(getContextPath() + '/api/People/' + p.id, {
            headers: {
                'Accept-Type': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'put',
            body: JSON.stringify(p)
        });
    }

    delete(id: number) {
        return fetch(getContextPath() + '/api/People/' + id, {
            headers: {
                'Accept-Type': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'delete'
        });
    }
}

export default new PeopleWebAPIUtils();