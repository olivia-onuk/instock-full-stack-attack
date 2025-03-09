import "./WarehouseDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchWarehouse, fetchWarehouseInventory } from "../../api/ApiService";
import WarehoudeDetailHero from "../../components/WarehouseDetailHero/WarehoudeDetailHero";
import WarehouseDetailSection from "../../components/WarehouseDetailSection/WarehouseDetailSection";
import InventoryList from "../../components/InventoryList/InventoryList";

function WarehouseDetails() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState({});
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const getWarehouse = async() => {
      try {
        const resp = await fetchWarehouse(id);
        setWarehouse(resp);
      } catch (error) {
        console.log("Error fetching warehouse:", error);
      }
    }
    const getWarehouseInventory = async() => {
      try {
        const resp = await fetchWarehouseInventory(id);
        setInventory(resp);
      } catch (error) {
        console.log("Error fetching warehouse inventories:", error);
      }
    }
    getWarehouse();
    getWarehouseInventory();
  },[]);
  
  if (!warehouse) {
    return <p>Loading warehouse details...</p>;
  }

  return(
    <div className="main warehouse-detail-page">
      <WarehoudeDetailHero id={id} warehouse={warehouse} />
      <WarehouseDetailSection warehouse={warehouse} />
      <InventoryList id={id} inventory={inventory} isFullInventory={false}/>
    </div>
  );
}

export default WarehouseDetails;
