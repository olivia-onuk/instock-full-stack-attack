import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./WarehouseDetails.scss";
import InventoryList from "../../components/InventoryList/InventoryList";

function WarehouseDetails() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState();

  

  return(
    <div className="warehouse-detail-page">
      <div className="warehouse_hero">
        <h1></h1>
        <img src="" alt="" />
      </div>
        <div className="warehouse-detail">
          <h4>WAREHOUSE ADDRESS</h4>
        </div>
      <InventoryList />
    </div>
  );
}

export default WarehouseDetails;
