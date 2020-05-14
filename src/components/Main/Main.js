import React, { useState } from 'react';
import Modal from '../../ui/Modal/Modal';
import PlayForm from '../PlayForm/PlayForm';
import ResultText from '../ResultText/ResultText';

const Main = () => {
    const modalRef = React.useRef();
    const modalRefPlay = React.useRef();

    console.log(modalRef);
    const openModalPlay = () => modalRefPlay.current.openModal();
    const openModal = () => modalRef.current.openModal();
    const closeModalPlay = () => modalRefPlay.current.close();
    const closeModal = () => modalRef.current.close();
    return (
        <>
            <button onClick={openModalPlay}>Play</button>
            <button onClick={openModal}>Open Modal</button>
            <Modal ref={modalRefPlay}>
                <PlayForm closeModal={closeModal} />
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi esse facere illo in minima nulla quis reiciendis. Eligendi impedit nostrum quam quod reprehenderit, ullam veritatis. Fuga provident quos velit.</span><span>Accusantium ad, alias animi et eum, excepturi explicabo fuga iusto magnam maxime minima molestias nam nemo nostrum pariatur perspiciatis porro quae quibusdam quidem quis repudiandae sed ullam vel, veniam vero.</span><span>Eligendi nulla quasi quibusdam quod saepe suscipit tenetur voluptas voluptate! Accusamus amet, commodi culpa distinctio dolor eveniet expedita hic iure magnam magni mollitia nulla officia quas, reiciendis repellat sapiente, veniam!</span>
            </Modal>
            <Modal ref={modalRef}>
                <ResultText closeModal={closeModalPlay} />
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi esse facere illo in minima nulla quis reiciendis. Eligendi impedit nostrum quam quod reprehenderit, ullam veritatis. Fuga provident quos velit.</span><span>Accusantium ad, alias animi et eum, excepturi explicabo fuga iusto magnam maxime minima molestias nam nemo nostrum pariatur perspiciatis porro quae.</span>
            </Modal>
        </>
    )
}

export default Main;