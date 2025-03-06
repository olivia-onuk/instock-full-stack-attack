import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import { fetchWarehouseInventory, fetchInventories } from "../../api/ApiService";
import { useState, useEffect } from "react";

function InventoryList({ id, isFullInventory }) {
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
      const getInventories = async() => {
        const resp = await fetchInventories();
        console.log(resp);
        setInventory(resp);
      }
      getInventories();
    }
  }, []);

  return (
    <>
      <InventoryItem inventory={inventory} isFullInventory={isFullInventory} />
    </>
  );
}

export default InventoryList;
