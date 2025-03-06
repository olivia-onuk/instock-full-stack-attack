import "./InventoryDeleteModal.scss";
import ReactModal from "react-modal";
import Close from "../../assets/icons/close-24px.svg";

function InventoryDeleteModal({ itemName, onDelete, onClose, isOpen }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Confirmation"
      className="delete-modal"
      overlayClassName="delete-modal__overlay"
    >
      <div className="inventory-delete">
        <div className="inventory-delete__close">
          <img
            src={Close}
            alt="Close Icon"
            className="inventory-delete__close-icon"
            onClick={onClose}
          />
        </div>
        <div className="inventory-delete__text">
          <h1>Delete {itemName} inventory item?</h1>
          <p>
            Please confirm you'd like to delete {itemName} from the inventory
            list. You won't be able to undo this action
          </p>
        </div>
        <div className="inventory-delete__buttons">
          <button
            className="inventory-delete__buttons-cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="inventory-delete__buttons-delete"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </ReactModal>
  );
}

export default InventoryDeleteModal;
