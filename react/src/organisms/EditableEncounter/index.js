import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AutoTextArea from '@webscopeio/react-textarea-autocomplete';

import '@webscopeio/react-textarea-autocomplete/style.css';

const LoadingComponent = (data) => {
    console.log(data);
    return null;
};

const Item = ({ entity: { name, char }}) => (
    <div>{`${name}: ${char}`}</div>
);

const trigger = {
    ":": {
        dataProvider: token => {return [{name: 'burger', char: 'ham'}]},
        component: Item,
        output: (item, trigger) => item.char
    }
};

class EditableEncounter extends Component {

    render() {
        const { encounters, match: { params }} = this.props;
        const id = parseInt(params.id, 10)
        const encounter = encounters.find((e) => e.id === id);

        if (encounter) {
            return (
                <div className="editable-encounter">
                    <input 
                        className="editable-encounter__title"
                        defaultValue={encounter.name}
                    />
                    <div>
                        <AutoTextArea 
                            loadingComponent={LoadingComponent}
                            trigger={trigger}
                        />
                    </div>
                </div>
            )
        } else if (id === 0) { 
            return (
                <div className="editable-encounter">
                    <input 
                        className="editable-encounter__title"
                    />
                    <div>
                        <AutoTextArea 
                            loadingComponent={LoadingComponent}
                            trigger={trigger}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="editable-encounter">
                    No encounter with id {params.id} was found.
                </div>
            )
        }
    }
}

export default withRouter(EditableEncounter);