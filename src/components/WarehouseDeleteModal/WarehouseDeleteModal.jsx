// src/components/WarehouseDeleteModal/WarehouseDeleteModal.jsx
import React from "react";
import ReactModal from "react-modal";
import { P1 } from '../Typography/Typography';
import closeIcon from "../../assets/icons/close-24px.svg";
import "./WarehouseDeleteModal.scss";

const WarehouseDeleteModal = ({
  isOpen,
  onClose,
  warehouse,
  onDelete,
  isDeleting
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Confirmation"
      className="warehouse-delete-modal"
      overlayClassName="warehouse-delete-modal__overlay"
    >
      <div className="warehouse-delete-modal__content">
        <div className="warehouse-delete-modal__top">
          <div 
            className="warehouse-delete-modal__close"
            onClick={onClose}
          >
            <img src={closeIcon} alt="close" />
          </div>
          <div className="warehouse-delete-modal__text">
            <h1 className="warehouse-delete-modal__title">
              Delete {warehouse?.warehouse_name || "Warehouse"}
            </h1>
            <P1>
              Please confirm that you’d like to delete the{" "}
              {warehouse?.warehouse_name || "Warehouse"} from the list of warehouses.
              You won’t be able to undo this action.
            </P1>
          </div>
        </div>
        <div className="warehouse-delete-modal__actions">
          <button 
            className="warehouse-delete-modal__button cancel"
            onClick={onClose}
            disabled={isDeleting}
          >
            <h3>Cancel</h3>
          </button>
          <button 
            className="warehouse-delete-modal__button confirm"
            onClick={onDelete}
            disabled={isDeleting}
          >
            <h3>Delete</h3>
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default WarehouseDeleteModal;
