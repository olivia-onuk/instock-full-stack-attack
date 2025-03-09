import { useState } from "react";
import InventoryListHeader from "../InventoryListHeader/InventoryListHeader";
import InventoryItem from "../InventoryItem/InventoryItem";

function InventoryList({
  inventory,
  isFullInventory,
  onSort,
  onDeleteClick,
}) {
  const [sortConfig, setSortConfig] = useState({
    key: "item_name",
    order: "asc",
  });

  const handleSort = (column) => {
    const newOrder = sortConfig.key === column 
      ? (sortConfig.order === "asc" ? "desc" : "asc")
      : "asc";
    
    setSortConfig({ key: column, order: newOrder });
    
    onSort(column, newOrder);
  };
  return (
    <>
      <InventoryListHeader
        isFullInventory={isFullInventory}
        onSort={handleSort}
        sortConfig={sortConfig}
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
