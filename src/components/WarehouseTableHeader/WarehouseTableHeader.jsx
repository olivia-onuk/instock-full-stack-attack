import "./WarehouseTableHeader.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";

function WarehouseTableHeader() {
  return (
    <div className="warehouse-tablet-header">
      <span className="warehouse-tablet-label">
        <h4>WAREHOUSE</h4>
        <img src={sortIcon} alt="sort" className="sort-icon" />
      </span>
      <span className="warehouse-tablet-label">
        <h4>ADDRESS</h4>
        <img src={sortIcon} alt="sort" className="sort-icon" />
      </span>
      <span className="warehouse-tablet-label">
        <h4>CONTACT NAME</h4>
        <img src={sortIcon} alt="sort" className="sort-icon" />
      </span>
      <span className="warehouse-tablet-label">
        <h4>CONTACT INFORMATION</h4>
        <img src={sortIcon} alt="sort" className="sort-icon" />
      </span>
      <span className="warehouse-tablet-label">
        <h4>ACTIONS</h4>
      </span>
    </div>
  );
}

export default WarehouseTableHeader;
