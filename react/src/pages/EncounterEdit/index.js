import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import EncounterList from '../../organisms/EncounterList';
import EditableEncounter from '../../organisms/EditableEncounter';

import Header from './Header';

import '../../style.css';

class EncounterEdit extends Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        fetch('http://bugbear:5000/encounter/')
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                encounters: resp
            })
        })
    }

    render() {
        const { encounters } = this.state;
        const { match: { url }} = this.props;

        if (encounters === undefined) {
            return null;
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path={`${url}/:id`} component={() => (
                        <EditableEncounter
                            encounters={encounters}
                        />
                    )} />
                    <Route path={`${url}/`} component={() => (
                        <EncounterList
                            encounters={encounters}
                        />
                    )} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(EncounterEdit);