import "./Warehouse.scss";
import WarehouseTable from "../../components/WarehouseTable/WarehouseTable";
import { useState } from "react";
import searchIcon from "../../assets/icons/search-24px.svg";

function Warehouse() {
  const [query, setQuery] = useState("");

  const handleSearch = async() => {
    if(query.trim()!== "") {
      searchWarehouse(query);
    }
  }

  return(
    <div className="warehouses-section">
      <div className="warehouses-hero">
        <h1 className="warehouses-title">Warehouses</h1>
        <div className="warehouses-hero__right">
          <div className="warehouse-search">
            <input 
            type="text" 
            className="warehouse-search__input" 
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <img src={searchIcon} alt="Search" className="warehouse-search__icon" onClick={handleSearch} />
          </div>
          <button className="add-warehouse-button"><h3>+ Add New Warehouse</h3></button>
        </div>
      </div>
      <WarehouseTable />
    </div>

  )
}

export default Warehouse;
