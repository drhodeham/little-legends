import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = ({ history, match: { path } }) => {
    console.log(path);

    let create_type = path.split('/')[2]
    create_type = create_type.charAt(0).toUpperCase() + create_type.slice(1)

    return (
        <div className='encounter-edit__header'>
            <div
                className="page-button"
                onClick={() => history.push('/')}
            >
                Game
            </div>
            <div
                className="page-button"
                onClick={() => history.push('/edit/encounters')}
            >
                Encounters
            </div>
            <div
                className="page-button create-new"
                onClick={() => history.push(`${path}/0`)}
            >
                Create {create_type}
            </div>
        </div>
    )
}

export default withRouter(Header);