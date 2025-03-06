import "./InventoryItem.scss";
import { useState, useEffect } from "react";
import { P2 } from '../Typography/Typography';
import { Link } from 'react-router-dom'
import { fetchWarehouses } from "../../api/ApiService";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

function InventoryItem({inventory , isFullInventory}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = (itemId) => {
  //   setSelectedWarehouseId(itemId);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedWarehouseId(null);
  // };

  // const handleDeleteConfirmed = () => {
  //   console.log('Deleting warehouse:', selectedWarehouseId);
  //   handleCloseModal();
  // };

  // const handleDelete = async () => {
  //   const success = await deleteWarehouse(warehouse.id);
  //   if(success) {
  //     console.log("Warehouse deleted successfully");
  //   } else {
  //     console.log("Failed to delete warehouse");
  //   }
  // }

  return(
    <div className="warehouse-list-section">
    <div className="warehouse-tablet-header">
      <span className="warehouse-tablet-label">
      <h4>INVENTORY ITEM</h4>
      <img src={sortIcon} alt="sort" className="warehouse-tablet-icon" />
      </span>
      <span className="warehouse-tablet-label">
      <h4>CATEGORY</h4>
      <img src={sortIcon} alt="sort" className="warehouse-tablet-icon" />
      </span>
      <span className="warehouse-tablet-label">
      <h4>STATUS</h4>
      <img src={sortIcon} alt="sort" className="warehouse-tablet-icon" />
      </span>
      <span className="warehouse-tablet-label">
      <h4>QUANTITY</h4>
      <img src={sortIcon} alt="sort" className="warehouse-tablet-icon" />
      </span>
      <span className="warehouse-tablet-label">
      <h4>ACTIONS</h4>
      </span>
    </div>
    <div className="warehouse-list">
      {inventory.map((item) => (
        <div key={item.id} className="warehouse-item">
          <div className="warehouse-item__content">
            <div className="warehouse-item__columns">
              <div className="warehouse-item__column">
                <div className="warehouse-item__attribute warehouse-item__name">
                  <h4 className="warehouse-item__label">INVENTORY ITEM</h4>
                  <Link to={`/inventory/${item.id}`} className="warehouse-item__link">
                    <h3>{item.item_name}</h3>
                    <img src={chevronIcon} alt="chevron" className="warehouse-item__link-icon"/>
                  </Link>
                </div>

                <div className="warehouse-item__attribute warehouse-item__address">
                  <h4 className="warehouse-item__label">CATEGORY</h4>
                  <P2>{item.category}</P2>
                </div>
              </div>

              <div className="warehouse-item__column">
                <div className="warehouse-item__attribute warehouse-item__contact-name">
                  <h4 className="warehouse-item__label">STATUS</h4>
                  <P2>{item.status}</P2>
                </div>

                <div className="warehouse-item__attribute warehouse-item__contact-infor">
                  <h4 className="warehouse-item__label">QTY</h4>
                  <P2>
                    <p>{item.quantity}</p>
                  </P2>
                </div>
              </div>
            </div>
          </div>
          <div className="warehouse-item__actions">
            <img 
              src={deleteIcon} 
              alt="delete"
              onClick={() => handleOpenModal(item.id)}
              className="warehouse-item__delete-icon"
            />
            <Link to={`/warehouse/edit/${item.id}`}>
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