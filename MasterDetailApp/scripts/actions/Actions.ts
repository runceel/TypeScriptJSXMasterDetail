import * as Models from './../stores/Models';

export class SetMasterAction {
    constructor(public people: Models.Person[]) {
    }
}

export class SetPeopleCountAction {
    constructor(public count: number) {
    }
}

export class SetDetailAction {
    constructor(public person: Models.Person) {
    }
}

export class SetPageActoin {
    constructor(public page: number) {
    }
}

export class SetPageSizeAction {
    constructor(public pageSize: number) {
    }
}
