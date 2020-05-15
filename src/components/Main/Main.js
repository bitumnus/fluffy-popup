import React, { useState } from 'react';
import Modal from '../../ui/Modal/Modal';
import PlayForm from '../PlayForm/PlayForm';
import ResultText from '../ResultText/ResultText';
import { connect } from 'react-redux';
import Button from '../../ui/Button/Button';

const Main = (props) => {
    const { words } = props;

    const modalRef = React.useRef();
    const modalRefPlay = React.useRef();
    
    const openModalPlay = () => modalRefPlay.current.openModal();
    const closeModalPlay = () => modalRefPlay.current.close();
    const openModal = () => modalRef.current.openModal();
    const closeModal = () => modalRef.current.close();
    return (
        <div>
            <Button type="primary" onClick={openModalPlay}>Play</Button>
            <Button type="primary" onClick={openModal} disabled={!words}>Open Modal</Button>
            <Modal ref={modalRefPlay} title="Давай играть">
                <PlayForm words={words} closeModal={closeModalPlay.bind(this)} />
            </Modal>
            <Modal ref={modalRef} title="Твоя история">
                <ResultText closeModal={closeModal.bind(this)} />
            </Modal>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        words: state.words,
    }
}

export default connect(mapStateToProps)(Main);