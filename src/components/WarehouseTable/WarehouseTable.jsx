import "./WarehouseTable.scss";
import { useState, useEffect } from "react";
import { deleteWarehouse } from "../../api/ApiService";
import { P1, P2 } from '../Typography/Typography';
import { Link } from 'react-router-dom'
import ReactModal from "react-modal";
import { fetchWarehouses } from "../../api/ApiService";
import WarehouseTableHeader from "../WarehouseTableHeader/WarehouseTableHeader";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import closeIcon from "../../assets/icons/close-24px.svg";

function WarehouseTable() {
  const [warehouses, setWarehouses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleOpenModal = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWarehouse(null);
    setIsDeleting(false);
  };

  const handleDeleteConfirmed = async() => {
    if (!selectedWarehouse || isDeleting) return;
    setIsDeleting(true);
    try {
      await deleteWarehouse(selectedWarehouse.id);
      setWarehouses(prev => prev.filter(
        warehouse => warehouse.id !== selectedWarehouse.id
      ));
    } catch (error) {
      console.error('Delete failed:', error);
    }
    handleCloseModal();
  };

  useEffect(() => {
    const getWarehouses = async() => {
      const resp = await fetchWarehouses();
      setWarehouses(resp);
    }
    getWarehouses();
  }, []);

  return(
    <div className="warehouse-list-section">
    <WarehouseTableHeader />
    <div className="warehouse-list">
      {warehouses.map((warehouse) => (
        <div key={warehouse.id} className="warehouse-item">
          <div className="warehouse-item__content">
            <div className="warehouse-item__columns">
              <div className="warehouse-item__column">
                <div className="warehouse-item__attribute warehouse-item__name">
                  <h4 className="warehouse-item__label">WAREHOUSE</h4>
                  <Link to={`/warehouse/${warehouse.id}`} className="warehouse-item__link">
                    <h3>{warehouse.warehouse_name}</h3>
                    <img src={chevronIcon} alt="chevron" className="warehouse-item__link-icon"/>
                  </Link>
                </div>

                <div className="warehouse-item__attribute warehouse-item__address">
                  <h4 className="warehouse-item__label">ADDRESS</h4>
                  <P2>{warehouse.address}, {warehouse.city}, {warehouse.country}</P2>
                </div>
              </div>

              <div className="warehouse-item__column">
                <div className="warehouse-item__attribute warehouse-item__contact-name">
                  <h4 className="warehouse-item__label">CONTACT NAME</h4>
                  <P2>{warehouse.contact_name}</P2>
                </div>

                <div className="warehouse-item__attribute warehouse-item__contact-infor">
                  <h4 className="warehouse-item__label">CONTACT INFORMATION</h4>
                  <P2>
                    <p>{warehouse.contact_phone}</p>
                    <p>{warehouse.contact_email}</p>
                  </P2>
                </div>
              </div>
            </div>
          </div>
          <div className="warehouse-item__actions">
            <img 
              src={deleteIcon} 
              alt="delete"
              onClick={() => handleOpenModal(warehouse)}
              className="warehouse-item__delete-icon"
            />
            <Link to={`/warehouse/edit/${warehouse.id}`}>
              <img src={editIcon} alt="edit" />
            </Link>
          </div>
        </div>
      ))}


    </div>

    <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Delete Confirmation"
        className="delete-modal"
        overlayClassName="delete-modal__overlay"
      >
        <div className="delete-modal__content">
          <div className="delete-modal__top">
            <div 
              className="delete-modal__close"
              onClick={handleCloseModal}
            >
              <img src={closeIcon} alt="close" />
            </div>
            <div className="delete-modal__text">
              <h1 className="delete-modal__title">Delete {selectedWarehouse ? selectedWarehouse.warehouse_name : "Warehouse"}</h1>
              <P1>Please confirm that you’d like to delete the {selectedWarehouse ? selectedWarehouse.warehouse_name : "Warehouse"} from the list of warehouses. You won’t be able to undo this action.</P1>
            </div>
          </div>
          <div className="delete-modal__actions">
            <button 
              className="delete-modal__button cancel"
              onClick={handleCloseModal}
              disabled={isDeleting}
            >
              <h3>Cancel</h3>
            </button>
            <button 
              className="delete-modal__button confirm"
              onClick={handleDeleteConfirmed}
              disabled={isDeleting}
            >
              <h3>Delete</h3>
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default WarehouseTable;