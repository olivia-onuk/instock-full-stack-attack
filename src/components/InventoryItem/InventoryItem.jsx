import "./InventoryItem.scss";
import { useState, useEffect } from "react";
import { P2 } from "../Typography/Typography";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";

function InventoryItem({ inventory, isFullInventory, onDeleteClick }) {
  const [isInStock, setIsInStock] = useState({});

  useEffect(() => {
    const stockStatus = inventory.reduce((acc, item) => {
      acc[item.id] = item.status.toLowerCase() === "in stock";
      return acc;
    }, {});
    setIsInStock(stockStatus);
  }, [inventory]);

  return (
    <div className="inventory-list-section">
      <div className="inventory-list">
        {inventory.map((item) => (
          <div key={item.id} className="inventory-item">
            <div className="inventory-item__content">
              <div className="inventory-item__columns">
                <div className="inventory-item__column">
                  <div className="inventory-item__attribute inventory-item__name">
                    <h4 className="inventory-item__label">INVENTORY ITEM</h4>
                    <Link
                      to={`/inventory/${item.id}`}
                      className="inventory-item__link"
                    >
                      <h3>{item.item_name}</h3>
                      <img
                        src={chevronIcon}
                        alt="chevron"
                        className="inventory-item__link-icon"
                      />
                    </Link>
                  </div>

                  <div className="inventory-item__attribute inventory-item__category">
                    <h4 className="inventory-item__label">CATEGORY</h4>
                    <P2>{item.category}</P2>
                  </div>
                </div>

                <div className="inventory-item__column">
                  <div className="inventory-item__attribute inventory-item__status">
                    <h4 className="inventory-item__label">STATUS</h4>
                    <p
                      className={`inventory-item__stock${
                        isInStock[item.id]
                          ? " inventory-item__stock--in-stock"
                          : " inventory-item__stock--out-of-stock"
                      }`}
                    >
                      {item.status}
                    </p>
                  </div>
                  {isFullInventory
                  ? (           
                    <div className="inventory-item__attribute inventory-item__full">
                    <div className="inventory-item__attribute inventory-item__qty">
                    <h4 className="inventory-item__label">QTY</h4>
                    <P2>
                      <p>{item.quantity}</p>
                    </P2>
                  </div>

                  <div
                    className={"inventory-item__attribute inventory-item__warehouse"}>
                    <h4 className="inventory-item__label">WAREHOUSE</h4>
                    <P2>
                      <p>{item.warehouse_name}</p>
                    </P2>
                  </div>
                  </div>)
                : (                    
                <div className="inventory-item__attribute inventory-item__qty--not-full">
                  <h4 className="inventory-item__label">QTY</h4>
                  <P2>
                    <p>{item.quantity}</p>
                  </P2>
                </div>) }

                </div>
              </div>
            </div>
            <div className="inventory-item__actions">
              <img
                src={deleteIcon}
                alt="delete"
                onClick={() => onDeleteClick(item)}
                className="inventory-item__delete-icon"
              />
              <Link to={`/inventory/edit/${item.id}`}>
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
