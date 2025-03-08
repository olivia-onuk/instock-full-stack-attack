import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import {
  fetchWarehouseInventory,
  fetchInventories,
} from "../../api/ApiService";
import { useEffect, useState } from "react";

function InventoryList({
  id,
  isFullInventory,
  inventory,
  setInventory,
  onDeleteClick,
}) {
  const [sortConfig, setSortConfig] = useState({
    key: "item_name",
    order: "asc",
  });

  useEffect(() => {
    const fetchData = async () => {
      const resp = isFullInventory
        ? await fetchInventories(sortConfig.key, sortConfig.order)
        : await fetchWarehouseInventory(id, sortConfig.key, sortConfig.order);
      setInventory(resp);
    };

    fetchData();
  }, [id, isFullInventory, sortConfig]);

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
      <InventoryItem
        inventory={inventory}
        isFullInventory={isFullInventory}
        onDeleteClick={onDeleteClick}
        onSort={handleSort}
        sortConfig={sortConfig}
      />
    </>
  );
}

export default InventoryList;
