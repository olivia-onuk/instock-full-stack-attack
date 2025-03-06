import "./Inventory.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search-24px.svg";


function Inventory() {
  const [query, setQuery] = useState("");

  const handleSearch = async() => {
    if(query.trim()!== "") {
      searchWarehouse(query);
    }
  }

  return(
    <div className=" main">
      <div className="inventory-hero">
        <h1 className="inventory-title">Inventory</h1>
        <div className="inventory-hero__right">
          <div className="inventory-search">
            <input 
            type="text" 
            className="inventory-search__input" 
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <img src={searchIcon} alt="Search" className="inventory-search__icon" onClick={handleSearch} />
          </div>
          <Link to="/inventory/add">
          <button className="add-inventory-button"><h3 className="add-inventory-button__text">+ Add New Item</h3></button>
          </Link>
        </div>
      </div>
      <InventoryList />
    </div>

  )
}

export default Inventory;
