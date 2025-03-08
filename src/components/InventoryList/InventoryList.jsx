import { useState, useEffect } from "react";
import InventoryListHeader from "../InventoryListHeader/InventoryListHeader";
import InventoryItem from "../InventoryItem/InventoryItem";
import {
  fetchWarehouseInventory,
  fetchInventories,
} from "../../api/ApiService";

function InventoryList({ id, isFullInventory, onDeleteClick }) {
  const [inventory, setInventory] = useState([]);
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
      <InventoryListHeader
        isFullInventory={isFullInventory}
        onSort={handleSort}
      />
      <InventoryItem
        inventory={inventory}
        isFullInventory={isFullInventory}
        onDeleteClick={onDeleteClick}
      />
    </>
  );
}

export default InventoryList;
