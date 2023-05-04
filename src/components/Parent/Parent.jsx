import React from 'react'
import Modal from '../Modal/Modal'

const Parent = ({ children, close, isOpen }) => {
    return isOpen && <Modal close={close}>{children}</Modal>;
};

export default Parent