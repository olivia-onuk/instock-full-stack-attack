import "./WarehouseList.scss";
import { P2 } from "../Typography/Typography";
import { Link } from "react-router-dom";
import WarehouseListHeader from "../WarehouseListHeader/WarehouseListHeader";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";

function WarehouseList({ warehouses, onDeleteClick, onSort }) {
  return (
    <div className="warehouse-list-section">
      <WarehouseListHeader onSort={onSort} />
      <div className="warehouse-list">
        {warehouses.map((warehouse) => (
          <div key={warehouse.id} className="warehouse-item">
            <div className="warehouse-item__content">
              <div className="warehouse-item__columns">
                <div className="warehouse-item__column">
                  <div className="warehouse-item__attribute warehouse-item__name">
                    <h4 className="warehouse-item__label">WAREHOUSE</h4>
                    <Link
                      to={`/warehouse/${warehouse.id}`}
                      className="warehouse-item__link"
                    >
                      <h3>{warehouse.warehouse_name}</h3>
                      <img
                        src={chevronIcon}
                        alt="chevron"
                        className="warehouse-item__link-icon"
                      />
                    </Link>
                  </div>

                  <div className="warehouse-item__attribute warehouse-item__address">
                    <h4 className="warehouse-item__label">ADDRESS</h4>
                    <P2>
                      {warehouse.address}, {warehouse.city}, {warehouse.country}
                    </P2>
                  </div>
                </div>

                <div className="warehouse-item__column">
                  <div className="warehouse-item__attribute warehouse-item__contact-name">
                    <h4 className="warehouse-item__label">CONTACT NAME</h4>
                    <P2>{warehouse.contact_name}</P2>
                  </div>

                  <div className="warehouse-item__attribute warehouse-item__contact-infor">
                    <h4 className="warehouse-item__label">
                      CONTACT INFORMATION
                    </h4>
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
                onClick={() => onDeleteClick(warehouse)}
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

export default WarehouseList;
