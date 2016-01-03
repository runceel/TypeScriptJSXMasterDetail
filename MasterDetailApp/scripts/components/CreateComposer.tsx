import * as React from 'react';
import * as Models from './../stores/Models';
import {Col, Row, Button} from 'react-bootstrap';
import CreateActionCreator from './../actions/CreateActionCreator';

interface CreateComposerProps extends React.Props<{}> {
}

interface CreateComposerState {
    inputName: string;
    inputAge: string;
}

export default class CreateComposer extends React.Component<CreateComposerProps, CreateComposerState> {
    constructor(props: CreateComposerProps) {
        super(props);
        this.state = { inputName: '', inputAge: '0' };
    }

    private handleOnSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        CreateActionCreator.create(new Models.Person(-1, this.state.inputName, parseInt(this.state.inputAge)));
    }

    private handleNameChange(e: React.FormEvent) {
        this.setState({
            inputName: (e.target as HTMLInputElement).value
        } as CreateComposerState);
    }

    private handleAgeChange(e: React.FormEvent) {
        this.setState({
            inputAge: (e.target as HTMLInputElement).value
        } as CreateComposerState);
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit.bind(this)}>
                <Row>
                    <Col md={12}>
                        <div className='form-group'>
                            <label className='label'>
                                名前
                            </label>
                            <input type='text' className='form-control' value={this.state.inputName} onChange={this.handleNameChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label className='label'>
                                年齢
                            </label>
                            <input type='text' className='form-control' value={this.state.inputAge} onChange={this.handleAgeChange.bind(this)}/>
                        </div>
                        <Button block={true} bsStyle='primary' type='submit'>作成</Button>
                    </Col>
                </Row>
            </form>
        );
    }
}
