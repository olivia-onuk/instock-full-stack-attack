import "./InventoryDeleteModal.scss";
import ReactModal from "react-modal";
import Close from "../../assets/icons/close-24px.svg";

function InventoryDeleteModal({ itemName, onDelete, onClose, isOpen }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Confirmation"
      className="modal"
      overlayClassName="modal__overlay"
    >
      <div className="modal__content">
        <div className="modal__content-header">
          <img
            src={Close}
            alt="Close Icon"
            className="modal__content-header--close"
            onClick={onClose}
          />
        </div>
        <div className="modal__content-body">
          <h1 className="modal__content-body-title">
            Delete {itemName} inventory item?
          </h1>
          <p className="modal__content-body-description">
            Please confirm you'd like to delete {itemName} from the inventory
            list. You won't be able to undo this action.
          </p>
        </div>
        <div className="modal__content-actions">
          <button className="modal__content-actions--cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal__content-actions--delete" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </ReactModal>
  );
}

export default InventoryDeleteModal;
