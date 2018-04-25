import React, { Component } from 'react';

import Encounter from './Encounter';

import './style.css';

class EncounterList extends Component {

    render() {
        const { encounters } = this.props;

        if (!encounters) {
            return null;
        }

        let renderContent = []
        for (let i = 0; i < encounters.length; i++) {
            console.log(encounters[i])
            renderContent.push(
                <Encounter 
                    key={i} 
                    encounter={encounters[i]}
                />
            )
        }

        return (
            <div className='encounter-list' >
                {renderContent}
            </div>
        )
    }
}

export default EncounterList;