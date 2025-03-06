import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import { fetchWarehouseInventory } from "../../api/ApiService";
import { useState, useEffect } from "react";

function InventoryList({ id, isFullInventory }) {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const getInventory = async () => {
      const resp = await fetchWarehouseInventory(id);
      console.log(resp);
      setInventory(resp);
    };
    if (!isFullInventory) {
      getInventory();
    } else {
    }
  }, []);

  return (
    <>
      <InventoryItem inventory={inventory} isFullInventory={isFullInventory} />
    </>
  );
}

export default InventoryList;
