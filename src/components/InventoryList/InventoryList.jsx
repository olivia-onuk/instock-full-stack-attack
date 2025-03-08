import { useState, useEffect } from "react";
import InventoryListHeader from "../InventoryListHeader/InventoryListHeader";
import InventoryItem from "../InventoryItem/InventoryItem";
import { fetchWarehouseInventory, fetchInventories } from "../../api/ApiService";
import "./InventoryList.scss";

function InventoryList({ id, isFullInventory, onDeleteClick }) {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const getWarehouseInventory = async () => {
      const resp = await fetchWarehouseInventory(id);
      console.log(resp);
      setInventory(resp);
    };
    if (!isFullInventory) {
      getWarehouseInventory();
    } else {
      const getInventories = async () => {
        const resp = await fetchInventories();
        setInventory(resp);
      }
      getInventories();
    };
  }, [id, isFullInventory]);

  return (
    <>
    <InventoryListHeader isFullInventory={isFullInventory} />
    <InventoryItem
      inventory={inventory}
      isFullInventory={isFullInventory}
      onDeleteClick={onDeleteClick}
      />
      </>
  );
}

export default InventoryList;
