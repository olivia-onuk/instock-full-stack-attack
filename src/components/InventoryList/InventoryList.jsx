import { useState, useEffect } from "react";
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
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };
    getData();
  }, [id, isFullInventory]);

  return (
    <InventoryItem
      inventory={inventory}
      isFullInventory={isFullInventory}
      onDeleteClick={onDeleteClick}
    />
  );
}

export default InventoryList;
