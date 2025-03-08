import "./WarehouseDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchWarehouse } from "../../api/ApiService";
import WarehoudeDetailHero from "../../components/WarehouseDetailHero/WarehoudeDetailHero";
import WarehouseDetailSection from "../../components/WarehouseDetailSection/WarehouseDetailSection";
import InventoryList from "../../components/InventoryList/InventoryList";

function WarehouseDetails() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState({});

  useEffect(() => {
    const getWarehouse = async() => {
      try {
        const resp = await fetchWarehouse(id);
        setWarehouse(resp);
      } catch (error) {
        console.log("Error fetching warehouse:", error);
      }
    }
    getWarehouse();
  },[]);
  
  if (!warehouse) {
    return <p>Loading warehouse details...</p>;
  }

  return(
    <div className="main warehouse-detail-page">
      <WarehoudeDetailHero id={id} warehouse={warehouse} />
      <WarehouseDetailSection warehouse={warehouse} />
      <InventoryList id={id} isFullInventory={false}/>
    </div>
  );
}

export default WarehouseDetails;
