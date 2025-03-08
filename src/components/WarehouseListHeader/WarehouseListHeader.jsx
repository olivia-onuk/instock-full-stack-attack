import "./WarehouseListHeader.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";

function WarehouseListHeader({ onSort }) {
  return (
    <div className="warehouse-tablet-header">
      <span className="warehouse-tablet-label">
        <h4>WAREHOUSE</h4>
        <img
          src={sortIcon}
          alt="sort"
          className="sort-icon"
          onClick={() => onSort("warehouse_name")}
        />
      </span>
      <span className="warehouse-tablet-label">
        <h4>ADDRESS</h4>
        <img
          src={sortIcon}
          alt="sort"
          className="sort-icon"
          onClick={() => onSort("address")}
        />
      </span>
      <span className="warehouse-tablet-label">
        <h4>CONTACT NAME</h4>
        <img
          src={sortIcon}
          alt="sort"
          className="sort-icon"
          onClick={() => onSort("contact_name")}
        />
      </span>
      <span className="warehouse-tablet-label">
        <h4>CONTACT INFORMATION</h4>
        <img
          src={sortIcon}
          alt="sort"
          className="sort-icon"
          onClick={() => onSort("contact_phone")}
        />
      </span>
      <span className="warehouse-tablet-label">
        <h4>ACTIONS</h4>
      </span>
    </div>
  );
}

export default WarehouseListHeader;
