import React from 'react';
import { withRouter } from 'react-router-dom';

const Encounter = ({ key, encounter, history }) => {

    const tags = encounter.tags.sort();
    let renderTags = []
    for (let i = 0; i < tags.length; i++) {
        renderTags.push(
            <div className='bit'>
                {tags[i]}
            </div>
        )
    }

    return (
        <div 
            key={key} 
            className='encounter-list__encounter' 
            onClick={() => history.push('/edit/encounter/' + encounter.id)}
        >
            <div className='bit id'>
                {encounter.id}
            </div>
            <div className='bit name'>
                Name: {encounter.name}
            </div>
            {renderTags}
        </div>
    )
}

export default withRouter(Encounter);