import React, { useEffect, useState, useRef } from 'react';
import Modal from '../../ui/Modal/Modal';
import PlayForm from '../PlayForm/PlayForm';
import ResultText from '../ResultText/ResultText';
import { connect } from 'react-redux';
import Button from '../../ui/Button/Button';
import InfoBlock from '../Info/InfoBlock';


const Main = (props) => {
    const { words, success, error } = props;
    const modalRef = useRef();
    const modalRefPlay = useRef();
    const [isVisible, setIsVisible] = useState(false)
    
    const openModalPlay = () => modalRefPlay.current.openModal();
    const closeModalPlay = () => modalRefPlay.current.close();
    const openModal = () => modalRef.current.openModal();
    const closeModal = () => modalRef.current.close();

    useEffect(() => {
        return () => {
            setTimeout(() => {
                setIsVisible(true);
            }, 500);
            setTimeout(() => {
                setIsVisible(false);
            }, 5000);
        }
    }, [success, error])

    return (
        <>
            { (success || error) && isVisible &&
                <div className={success ? "success" : "error"}>
                    <InfoBlock response={success || error} />
                </div>
            }
            <br />
            <div className="main">
                <p>
                    Хочешь повеселиться? После нажатия "Играть" выскочит форма. Заполни поля соответствующими словами. Проявляй фантазию.
                    Отправляй нам слова, мы соберем историю. Прочитать её сможешь только когда отправишь слова и потом нажмёшь нужную кнопку. Удачи!
                </p>
                <Button type="primary" onClick={openModalPlay}>Играть</Button>
                <Button type="primary" onClick={openModal} disabled={!words}>Собрать историю</Button>
                <Modal ref={modalRefPlay} title="Давай играть">
                    <PlayForm words={words} closeModal={closeModalPlay.bind(this)} />
                </Modal>
                <Modal ref={modalRef} title="Твоя история">
                    <ResultText closeModal={closeModal.bind(this)} />
                </Modal>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        words: state.words,
        error: state.error,
        success: state.success,
    }
}

export default connect(mapStateToProps)(Main);