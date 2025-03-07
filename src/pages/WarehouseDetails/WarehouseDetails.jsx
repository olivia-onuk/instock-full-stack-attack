import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { P2 } from "../../components/Typography/Typography";
import "./WarehouseDetails.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import { fetchWarehouse } from "../../api/ApiService";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/icons/edit-white-24px.svg"
import WarehoudeDetailHero from "../../components/WarehouseDetailHero/WarehoudeDetailHero";

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
      <div className="warehouse-detail">
        <div className="warehouse-detail__address">
          <h4 className="warehouse-detail__label">WAREHOUSE ADDRESS:</h4>
          <P2 className="warehouse-detail__address-content"><span>{warehouse.address}, </span><span>{warehouse.city}, {warehouse.country}</span></P2>
        </div>
        <div className="warehouse-detail__contact">
          <div className="warehouse-detail__name">
            <h4 className="warehouse-detail__label">CONTACT NAME:</h4>
            <P2>
              <p>{warehouse.contact_name}</p>
              <p>{warehouse.contact_position}</p>
            </P2>
          </div>
          <div className="warehouse-detail__infor">
            <h4 className="warehouse-detail__label">CONTACT INFORMATION:</h4>
            <P2>
              <p>{warehouse.contact_phone}</p>
              <p>{warehouse.contact_email}</p>
            </P2>
          </div>
        </div>
      </div>
      <InventoryList id={id} isFullInventory={false}/>
    </div>
  );
}

export default WarehouseDetails;
