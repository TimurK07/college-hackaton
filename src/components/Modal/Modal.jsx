import './Modal.css';

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button className="modal-close" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;
