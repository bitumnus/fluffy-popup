import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { sentText } from '../../store/actions/actions';
import Button from '../../ui/Button/Button';

const PlayForm = (props) => {
    const {words, closeModal, post} = props;
    const startText = {
        text: `Lorem ipsum dolor sit ${words.word1.value} amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet ${words.word2.value} consectetur adipisicing elit.
            Lorem ipsum dolor sit amet ${words.word3.value} consectetur adipisicing elit.`
    }

    const [text, setText] = useState(startText);

    const sent = event => {
        post(text);
        closeModal();
    }

    return (
        <div className="card">
            {text.text}
            <Button type="primary" onClick={sent}>Отправить это куда-то</Button>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        words: state.words,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        post: text => dispatch(sentText(text))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayForm);
