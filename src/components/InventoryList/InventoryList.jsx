import { useState, useEffect } from "react";
import InventoryListHeader from "../InventoryListHeader/InventoryListHeader";
import InventoryItem from "../InventoryItem/InventoryItem";

function InventoryList({
  inventory,
  isFullInventory,
  onDeleteClick,
}) {
  const [inventory, setInventory] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "item_name",
    order: "asc",
  });

  const handleSort = (column) => {
    setSortConfig((prev) => {
      const isSameColumn = prev.key === column;
      return {
        key: column,
        order: isSameColumn ? (prev.order === "asc" ? "desc" : "asc") : "asc",
      };
    });
  };
  return (
    <>
      <InventoryListHeader
        isFullInventory={isFullInventory}
        onSort={handleSort}
      />
      <InventoryItem
        inventory={inventory}
        onDeleteClick={onDeleteClick}
        isFullInventory={isFullInventory}
      />
    </>
  );
}

export default InventoryList;
