import "./InventoryItem.scss";
import { useState, useEffect } from "react";
import { P2 } from '../Typography/Typography';
import { Link } from 'react-router-dom'
import { fetchWarehouses } from "../../api/ApiService";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

function InventoryItem() {
  const [warehouses, setWarehouses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);

  const handleOpenModal = (warehouseId) => {
    setSelectedWarehouseId(warehouseId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWarehouseId(null);
  };

  const handleDeleteConfirmed = () => {
    console.log('Deleting warehouse:', selectedWarehouseId);
    handleCloseModal();
  };

  useEffect(() => {
    const getWarehouses = async() => {
      const resp = await fetchWarehouses();
      setWarehouses(resp);
    }
    getWarehouses();
  }, []);

  const handleDelete = async () => {
    const success = await deleteWarehouse(warehouse.id);
    if(success) {
      console.log("Warehouse deleted successfully");
    } else {
      console.log("Failed to delete warehouse");
    }
  }

  return(
    <div className="warehouse-list-section">
    <div className="warehouse-tablet-header">
      <span className="warehouse-tablet-label">
      <h4>WAREHOUSE</h4>
      <img src={sortIcon} alt="sort" className="warehouse-tablet-icon" />
      </span>
      <span className="warehouse-tablet-label">
      <h4>ADDRESS</h4>
      <img src={sortIcon} alt="sort" className="warehouse-tablet-icon" />
      </span>
      <span className="warehouse-tablet-label">
      <h4>CONTACT NAME</h4>
      <img src={sortIcon} alt="sort" className="warehouse-tablet-icon" />
      </span>
      <span className="warehouse-tablet-label">
      <h4>CONTACT INFORMATION</h4>
      <img src={sortIcon} alt="sort" className="warehouse-tablet-icon" />
      </span>
      <span className="warehouse-tablet-label">
      <h4>ACTIONS</h4>
      </span>
    </div>
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
              onClick={() => handleOpenModal(warehouse.id)}
              className="warehouse-item__delete-icon"
            />
            <Link to={`/warehouse/edit/${warehouse.id}`}>
              <img src={editIcon} alt="edit" />
            </Link>
          </div>
        </div>
      ))}


    </div>
    </div>
  );
}

export default InventoryItem;