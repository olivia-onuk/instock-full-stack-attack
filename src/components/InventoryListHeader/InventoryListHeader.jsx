import "./InventoryListHeader.scss";

import sortIcon from "../../assets/icons/sort-24px.svg";

function InventoryListHeader({ isFullInventory, onSort }) {
  return (
    <div className="inventory-tablet-header">
      <span className="inventory-tablet-label">
        <h4>INVENTORY ITEM</h4>
        <img
          src={sortIcon}
          alt="sort"
          className="sort-icon"
          onClick={() => onSort("item_name")}
        />
      </span>
      <span className="inventory-tablet-label">
        <h4>CATEGORY</h4>
        <img
          src={sortIcon}
          alt="sort"
          className="sort-icon"
          onClick={() => onSort("category")}
        />
      </span>
      <span className="inventory-tablet-label">
        <h4>STATUS</h4>
        <img
          src={sortIcon}
          alt="sort"
          className="sort-icon"
          onClick={() => onSort("status")}
        />
      </span>
      {isFullInventory ? (
        <span className="inventory-tablet-label inventory-tablet-label__full">
          <span className="inventory-tablet-label inventory-tablet-label__quantity">
            <h4>QTY</h4>
            <img
              src={sortIcon}
              alt="sort"
              className="sort-icon"
              onClick={() => onSort("quantity")}
            />
          </span>
          <span className="inventory-tablet-label inventory-tablet-label__warehouse">
            <h4>WAREHOUSE</h4>
            <img
              src={sortIcon}
              alt="sort"
              className="sort-icon"
              onClick={() => onSort("warehouse_name")}
            />
          </span>
        </span>
      ) : (
        <span className="inventory-tablet-label">
          <h4>QUANTITY</h4>
          <img src={sortIcon} alt="sort" className="sort-icon" />
        </span>
      )}
      <span className="inventory-tablet-label inventory-tablet-label--action">
        <h4>ACTIONS</h4>
      </span>
    </div>
  );
}

export default InventoryListHeader;
