import "./Inventory.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search-24px.svg";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryDeleteModal from "../../components/InventoryDeleteModal/InventoryDeleteModal";
import { useDebounce } from 'use-debounce';

import {
  fetchInventories,
  deleteInventory,
} from "../../api/ApiService";

function Inventory() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("item_name");
  const [orderBy, setOrderBy] = useState("asc");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [inventory, setInventory] = useState([]);
  const [forceSearch, setForceSearch] = useState(0);
  const [debouncedQuery] = useDebounce(query, 300);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsSearching(true);
        const data = await fetchInventories(debouncedQuery, sortBy, orderBy);
        setInventory(data || []);
      } catch (error) {
        console.error("Failed loading inventory:", error);
      } finally {
        setIsSearching(false);
      }
    };
    loadData();
  }, [debouncedQuery, sortBy, orderBy, forceSearch]);

  const handleSort = (column, newOrder) => {
    setSortBy(column);
    setOrderBy(newOrder);
  };

  const handleManualSearch = () => {
    setForceSearch(prev => prev + 1);
  };


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('s') || '';
    setQuery(initialQuery);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedQuery) params.set('s', debouncedQuery);
    window.history.replaceState({}, '', `?${params}`);
  }, [debouncedQuery]);

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleConfirmDelete = async () => {
    if (!selectedItem) return;

    try {
      await deleteInventory(selectedItem.id);
      setInventory((prevInventory) =>
        prevInventory.filter((item) => item.id !== selectedItem.id)
      );
    } catch (error) {
      console.error("Error deleting inventory item:", error);
    }

    handleCloseModal();
  };


  return (
    <div className="main">
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
            />
            <img
              src={searchIcon}
              alt="Search"
              className="inventory-search__icon"
              onClick={handleManualSearch}
            />
          </div>
          <Link to="/inventory/add">
            <button className="add-inventory-button">
              <h3 className="add-inventory-button__text">+ Add New Item</h3>
            </button>
          </Link>
        </div>
      </div>

      <InventoryList
        inventory={inventory}
        isFullInventory={true}
        onSort={handleSort}
        onDeleteClick={handleDeleteClick}
      />

      <InventoryDeleteModal
        isOpen={showModal}
        onClose={handleCloseModal}
        onDelete={handleConfirmDelete}
        itemName={selectedItem?.item_name}
      />
    </div>
  );
}

export default Inventory;
