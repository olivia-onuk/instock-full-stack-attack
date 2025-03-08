import "./Warehouse.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchWarehouses, deleteWarehouse, searchWarehouses } from "../../api/ApiService";
import { useDebounce } from 'use-debounce'; 
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseDeleteModal from "../../components/WarehouseDeleteModal/WarehouseDeleteModal";
import searchIcon from "../../assets/icons/search-24px.svg";

function Warehouse() {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [warehouses, setWarehouses] = useState([]);
  const [sortBy, setSortBy] = useState("warehouse_name");
  const [orderBy, setOrderBy] = useState("asc");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const search = async () => {
      try {
        setIsSearching(true);
        const results = debouncedQuery 
          ? await searchWarehouses(debouncedQuery)
          : await fetchWarehouses();
        
        if (!results) {
          console.error("Received empty results");
          return;
        }
        
        setWarehouses(results);
      } catch (error) {
        console.error("Search failed:", error);
        alert("Search failed");
      } finally {
        setIsSearching(false);
      }
    };
    
    search();
  }, [debouncedQuery]);


  const handleManualSearch = async () => {
    try {
      setIsSearching(true);
      const results = await searchWarehouses(query);
      setWarehouses(results);
    } catch (error) {
      console.error("Manual search failed:", error);
    } finally {
      setIsSearching(false);
    }
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
    setOrderBy((prevOrder) =>
      sortBy === column && prevOrder === "asc" ? "desc" : "asc"
    );
    setSortBy(column);
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
              onClick={handleManualSearch} 
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
