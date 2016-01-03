import * as React from 'react';
import * as Models from './../stores/Models';
import {Col, Row, Button} from 'react-bootstrap';
import CreateActionCreator from './../actions/CreateActionCreator';
import {FlatButton, TextField} from 'material-ui';

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
                            <TextField floatingLabelText='名前' fullWidth={true}  value={this.state.inputName} onChange={this.handleNameChange.bind(this) }/>
                        </div>
                        <div className='form-group'>
                            <TextField floatingLabelText='年齢' fullWidth={true} value={this.state.inputAge} onChange={this.handleAgeChange.bind(this) }/>
                        </div>
                        <FlatButton type='submit'>作成</FlatButton>
                    </Col>
                    </Row>
            </form>
        );
    }
}
