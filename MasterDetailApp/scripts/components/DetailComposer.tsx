import * as React from 'react';
import DetailStore from './../stores/DetailStore';
import DetailActionCreator from './../actions/DetailActionCreator';
import * as Models from './../stores/Models';
import {Col, Row, Button} from 'react-bootstrap';

interface DetailComposerProps extends ReactRouter.RouteComponentProps<{}, { id: number }> {

}

interface DetailComposerState {
    target: Models.Person;
    inputName: string;
    inputAge: string;
}

export default class DetailComposer extends React.Component<DetailComposerProps, DetailComposerState> {
    private detailStoreSubscription: { remove: Function }

    constructor(props: DetailComposerProps) {
        super(props);
        this.state = this.getStateFromStore();
    }

    private onChange() {
        this.setState(this.getStateFromStore());
    }

    componentDidMount() {
        this.detailStoreSubscription = DetailStore.addListener(this.onChange.bind(this));
        DetailActionCreator.select(this.props.routeParams.id);
    }

    componentWillUnmount() {
        this.detailStoreSubscription.remove();
    }

    private getStateFromStore() {
        var target = DetailStore.getPerson();
        return {
            target: target,
            inputName: target ? target.name : '',
            inputAge: target ? target.age.toString() : ''
        } as DetailComposerState;
    }

    private handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        DetailActionCreator.update(new Models.Person(this.state.target.id, this.state.inputName, parseInt(this.state.inputAge)));
    }

    private handleNameChange(e: React.FormEvent) {
        this.setState({
            inputName: (e.target as HTMLInputElement).value
        } as DetailComposerState);
    }

    private handleAgeChange(e: React.FormEvent) {
        this.setState({
            inputAge: (e.target as HTMLInputElement).value
        } as DetailComposerState);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Row>
                        <Col md={12}>
                            <div className='form-group'>
                                <label>名前</label>
                                <input type='text' className='form-control' value={this.state.inputName} onChange={this.handleNameChange.bind(this)}/>
                            </div>
                            <div className='form-group'>
                                <label>年齢</label>
                                <input type='text' className='form-control' value={this.state.inputAge} onChange={this.handleAgeChange.bind(this)}/>
                            </div>
                            <Button bsStyle='primary' block={true} type='submit'>更新</Button>
                        </Col>
                    </Row>
                </form>
            </div>
        );
    }
}