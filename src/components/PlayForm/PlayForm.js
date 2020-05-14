import React from 'react';

const PlayForm = (props) => {
    const {closeModal} = props;

    return (
        <div>
            <h1>Kakakaka</h1>
            
            <button onClick={() => closeModal()}>
                Close Modal
            </button>
        </div>
    )
}

export default PlayForm;
