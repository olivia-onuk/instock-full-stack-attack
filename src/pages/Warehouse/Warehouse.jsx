import "./Warehouse.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchWarehouses, deleteWarehouse } from "../../api/ApiService";
import { useDebounce } from 'use-debounce'; 
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseDeleteModal from "../../components/WarehouseDeleteModal/WarehouseDeleteModal";
import searchIcon from "../../assets/icons/search-24px.svg";

function Warehouse() {
  const [forceSearch, setForceSearch] = useState(0);
  const [warehouses, setWarehouses] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [sortBy, setSortBy] = useState("warehouse_name");
  const [orderBy, setOrderBy] = useState("asc");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsSearching(true);
        const results = await fetchWarehouses(debouncedQuery, sortBy, orderBy);
        
        if (!results) {
          console.error("Received empty results");
          return;
        }
        
        setWarehouses(results);
      } catch (error) {
        console.error("Data fetch failed:", error);
        alert("Data fetch failed");
      } finally {
        setIsSearching(false);
      }
    };
    
    loadData();
  }, [debouncedQuery, sortBy, orderBy, forceSearch]); 


  const handleIconSearch = () => {
    setForceSearch(prev => prev + 1);
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedQuery) params.set('s', debouncedQuery);
    window.history.replaceState({}, '', `?${params}`);
  }, [debouncedQuery]);
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('s') || '';
    setQuery(initialQuery);
  }, [sortBy, orderBy]);

  const handleSort = (column) => {
    const newOrder = sortBy === column && orderBy === "asc" ? "desc" : "asc";
    setSortBy(column);
    setOrderBy(newOrder);
  
  };

  const handleOpenModal = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWarehouse(null);
    setIsDeleting(false);
  };

  const handleDeleteConfirmed = async () => {
    if (!selectedWarehouse || isDeleting) return;
    setIsDeleting(true);
    try {
      await deleteWarehouse(selectedWarehouse.id);
      setWarehouses((prev) =>
        prev.filter((warehouse) => warehouse.id !== selectedWarehouse.id)
      );
    } catch (error) {
      console.error("Delete failed:", error);
    }
    handleCloseModal();
  };

  return (
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
            />
            <img 
              src={searchIcon} 
              alt="Search" 
              className="warehouse-search__icon" 
              onClick={handleIconSearch}
              />
          </div>
          <Link to="/warehouse/add">
            <button className="add-warehouse-button">
              <h3 className="add-warehouse-button__text">
                + Add New Warehouse
              </h3>
            </button>
          </Link>
        </div>
      </div>
      <WarehouseList
        warehouses={warehouses}
        onDeleteClick={handleOpenModal}
        onSort={handleSort}
      />
      <WarehouseDeleteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        warehouse={selectedWarehouse}
        onDelete={handleDeleteConfirmed}
        isDeleting={isDeleting}
      />
    </div>
  );
}

export default Warehouse;
