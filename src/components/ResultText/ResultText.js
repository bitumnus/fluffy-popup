import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { sentText } from '../../store/actions/actions';
import Button from '../../ui/Button/Button';
import './ResultText.css'

const PlayForm = (props) => {
    const {words, closeModal, post} = props;
    const textRef = useRef();
    
    const startText = () => {
        return (
            <div ref={textRef}>
                Привет, <span>{words.word1.value}</span>. Видел твоего брата, он действително <span>{words.word2.value}</span>.
                Потом мне очень заболел <span>{words.word3.value}</span>. И я быстро <span>{words.word4.value}</span> прямо во дворе.
            </div>
            )
    }
    const [text, setText] = useState(startText());

    const sent = event => {
        event.preventDefault();
        const story = {
            text: textRef.current.textContent
        }
        post(story);
        closeModal();
    }

    return (
        <>
            <div className="card">
                {text}
            </div>
            <Button type="primary" onClick={sent}>Отправить это куда-то</Button>
        </>
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
