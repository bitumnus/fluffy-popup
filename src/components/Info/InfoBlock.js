import React from 'react';

const InfoBlock = props => {
    let responseText = '';
    switch (props.response.status) {
        case 200:
            return responseText = `Всё ${props.response.statusText}. Очень смешно :)`
        case 403:
            return responseText = `Ещё подумай: ${props.response.data.status}`
        case 404:
            return responseText = `Не туда отправляешь: ${props.response.data.error}`
        case 500:
            return responseText = `У сервера бедося: ${props.response.data.error}`
        default:
            break;
    }

    return (
        <>
            {responseText}
        </>
    )
}

export default InfoBlock;