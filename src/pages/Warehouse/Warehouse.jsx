import "./Warehouse.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchWarehouses, deleteWarehouse } from "../../api/ApiService";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseDeleteModal from "../../components/WarehouseDeleteModal/WarehouseDeleteModal";
import searchIcon from "../../assets/icons/search-24px.svg";

function Warehouse() {
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const getWarehouses = async() => {
      const resp = await fetchWarehouses();
      setWarehouses(resp);
    }
    getWarehouses();
  }, []);

  const handleSearch = async() => {
    if(query.trim()!== "") {
      searchWarehouse(query);
    }
  }

  const handleOpenModal = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWarehouse(null);
    setIsDeleting(false);
  };

  const handleDeleteConfirmed = async() => {
    if (!selectedWarehouse || isDeleting) return;
    setIsDeleting(true);
    try {
      await deleteWarehouse(selectedWarehouse.id);
      setWarehouses(prev => prev.filter(
        warehouse => warehouse.id !== selectedWarehouse.id
      ));
    } catch (error) {
      console.error('Delete failed:', error);
    }
    handleCloseModal();
  };

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
      <WarehouseList 
        warehouses={warehouses}
        onDeleteClick={handleOpenModal} 
      />
      <WarehouseDeleteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        warehouse={selectedWarehouse}
        onDelete={handleDeleteConfirmed}
        isDeleting={isDeleting}
      />
    </div>
  )
}

export default Warehouse;
