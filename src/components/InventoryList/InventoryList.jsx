import { useState, useEffect } from "react";
import InventoryListHeader from "../InventoryListHeader/InventoryListHeader";
import InventoryItem from "../InventoryItem/InventoryItem";
import { fetchWarehouseInventory, fetchInventories } from "../../api/ApiService";
import "./InventoryList.scss";

function InventoryList({ id, isFullInventory, onDeleteClick }) {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let resp;
        if (!isFullInventory) {
          resp = await fetchWarehouseInventory(id);
        } else {
          resp = await fetchInventories();
        }
        setInventory(resp);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };
    getData();
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
