import Modal from 'react-modal';
import css from "./ImageModal.module.css"
export default function ImageModal({isOpen, onClose, children}) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName={css.modalContainer}
            className={css.modalContent}
        >
            {children}
        </Modal>
    )
}