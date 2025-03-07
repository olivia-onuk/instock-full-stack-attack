import "./WarehouseList.scss";
import { useState, useEffect } from "react";
import { deleteWarehouse } from "../../api/ApiService";
import { P2 } from '../Typography/Typography';
import { Link } from 'react-router-dom'
import { fetchWarehouses } from "../../api/ApiService";
import WarehouseListHeader from "../WarehouseListHeader/WarehouseListHeader";
import WarehouseDeleteModal from "../WarehouseDeleteModal/WarehouseDeleteModal";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";

function WarehouseList() {
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
    <WarehouseListHeader />
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

    <WarehouseDeleteModal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      warehouse={selectedWarehouse}
      onDelete={handleDeleteConfirmed}
      isDeleting={isDeleting}
    />
    </div>
  );
}

export default WarehouseList;