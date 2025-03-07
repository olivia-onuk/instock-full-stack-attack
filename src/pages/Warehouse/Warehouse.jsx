import "./Warehouse.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import searchIcon from "../../assets/icons/search-24px.svg";

function Warehouse() {
  const [query, setQuery] = useState("");

  const handleSearch = async() => {
    if(query.trim()!== "") {
      searchWarehouse(query);
    }
  }

  return(
    <div className=" main">
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
          <Link to="/warehouse/add">
            <button className="add-warehouse-button">
              <h3 className="add-warehouse-button__text">+ Add New Warehouse</h3>
            </button>
          </Link>
        </div>
      </div>
      <WarehouseList />
    </div>

  )
}

export default Warehouse;
