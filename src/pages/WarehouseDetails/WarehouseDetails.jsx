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
  const [sortConfig, setSortConfig] = useState({
    key: "item_name",
    order: "asc"
  });

  const loadInventory = async () => {
    try {
      const resp = await fetchWarehouseInventory(
        id, 
        sortConfig.key, 
        sortConfig.order
      );
      setInventory(resp);
    } catch (error) {
      console.log("Error fetching inventory:", error);
    }
  };

  useEffect(() => {
    const getWarehouse = async () => {
      try {
        const resp = await fetchWarehouse(id);
        setWarehouse(resp);
      } catch (error) {
        console.log("Error fetching warehouse:", error);
      }
    };
    
    getWarehouse();
    loadInventory();
  }, [id, sortConfig]); // 当排序配置变化时自动重新加载

  // 排序处理函数
  const handleSort = (column) => {
    setSortConfig(prev => ({
      key: column,
      order: prev.key === column && prev.order === "asc" ? "desc" : "asc"
    }));
  };


  
  if (!warehouse) {
    return <p>Loading warehouse details...</p>;
  }

  return(
    <div className="main warehouse-detail-page">
      <WarehoudeDetailHero id={id} warehouse={warehouse} />
      <WarehouseDetailSection warehouse={warehouse} />
      <InventoryList 
      inventory={inventory} 
      isFullInventory={false}
      onSort={handleSort}
      />
    </div>
  );
}

export default WarehouseDetails;
