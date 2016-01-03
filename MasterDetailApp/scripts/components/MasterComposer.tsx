import * as React from 'react';
import ReactDataGrid = require('react-datagrid');
import MasterStore from './../stores/MasterStore';
import MasterActionCreator from './../actions/MasterActionCreator';
import DetailActionCreator from './../actions/DetailActionCreator';
import BrowserHistory from './../actions/BrowserHistory';
import * as Models from './../stores/Models';
import * as ReactRouter from 'react-router';

interface MasterComposerProps extends React.Props<{}> {
}

interface MasterComposerState {
    people: Models.Person[];
    page: number;
    pageSize: number;
    dataSourceCount: number;
    selectedId: number;
}

export default class MasterComposer extends React.Component<MasterComposerProps, MasterComposerState> {
    private masterStoreSubscription: { remove: Function }

    constructor(props: MasterComposerProps) {
        super(props);
        this.state = this.getStateFromStore();
    }

    private getStateFromStore() {
        return {
            people: MasterStore.getPeople(),
            dataSourceCount: MasterStore.getPeopleCount(),
            page: MasterStore.getPage(),
            pageSize: MasterStore.getPageSize()
        } as MasterComposerState;
    }

    private onChange() {
        this.setState(this.getStateFromStore());
    }

    private handlePageSizeChange(pageSize: number) {
        MasterActionCreator.setPageSize(pageSize);
        this.setState(this.getStateFromStore());
    }

    private handlePageChange(page: number) {
        MasterActionCreator.setPage(page);
        this.setState(this.getStateFromStore());
    }

    private handleSelectionChange(newSelectionId: number, data: Models.Person) {
        BrowserHistory.push('/detail/' + newSelectionId);
    }

    componentDidMount() {
        this.masterStoreSubscription = MasterStore.addListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        this.masterStoreSubscription.remove();
    }

    render() {
        console.log('page: ' + this.state.page);
        return (
            <ReactDataGrid 
                columns={[
                    { name: 'name', title: '名前' },
                    { name: 'age', title: '年齢' }
                ]}
                idProperty='id'
                dataSource={(x) => MasterActionCreator.load(x.pageSize, x.skip)} 
                defaultPageSize={this.state.pageSize}
                defaultPage={this.state.page}
                dataSourceCount={this.state.dataSourceCount}
                page={this.state.page}
                pageSize={this.state.pageSize}
                onSelectionChange={this.handleSelectionChange.bind(this)}
                onPageChange={this.handlePageChange.bind(this)}
                onPageSizeChange={this.handlePageSizeChange.bind(this)}
                selected={this.state.selectedId}
                style={{ height: 500 }}/>
        );
    }
}
