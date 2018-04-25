import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.css'

const EditableEncounter = ({ encounters, match: { params } }) => {
    const encounter = encounters.find((e) => e.id === parseInt(params.id, 10))

    if (encounter) {
        return (
            <div className="editable-encounter-body">
                {params.id}
            </div>
        )
    } else {
        return (
            <div className="editable-encounter-body">
                No encounter with id {params.id} was found.
            </div>
        )
    }
}

export default withRouter(EditableEncounter);