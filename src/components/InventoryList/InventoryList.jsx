import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import {
  fetchWarehouseInventory,
  fetchInventories,
} from "../../api/ApiService";
import { useEffect } from "react";

function InventoryList({
  id,
  isFullInventory,
  inventory,
  setInventory,
  onDeleteClick,
}) {
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
      };
      getInventories();
    }
  }, [id, isFullInventory]);

  return (
    <>
      <InventoryItem
        inventory={inventory}
        isFullInventory={isFullInventory}
        onDeleteClick={onDeleteClick}
      />
    </>
  );
}

export default InventoryList;
