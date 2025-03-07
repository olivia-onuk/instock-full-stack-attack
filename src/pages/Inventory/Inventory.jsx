import "./Inventory.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search-24px.svg";
import InventoryDeleteModal from "../../components/InventoryDeleteModal/InventoryDeleteModal";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

function Inventory() {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        console.log("Fetching inventory...");
        const response = await axios.get(`${API_BASE_URL}api/inventories`);
        console.log("Inventory Data:", response.data);
        setInventory(response.data);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };
    fetchInventory();
  }, []);

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
      console.log(`Deleting inventory item with ID: ${selectedItem.id}...`);
      await axios.delete(`${API_BASE_URL}api/inventories/${selectedItem.id}`);

      setInventory((prevInventory) =>
        prevInventory.filter((item) => item.id !== selectedItem.id)
      );

      console.log(`Inventory item ${selectedItem.id} deleted successfully!`);
    } catch (error) {
      console.error("Error deleting inventory item:", error);
    }

    handleCloseModal();
  };

  const handleSearch = async () => {
    if (query.trim() === "") return;

    try {
      console.log(`Searching for: ${query}`);
      const response = await axios.get(
        `${API_BASE_URL}/api/inventories?search=${query}`
      );
      setInventory(response.data);
    } catch (error) {
      console.error("Error searching inventory:", error);
    }
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
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <img
              src={searchIcon}
              alt="Search"
              className="inventory-search__icon"
              onClick={handleSearch}
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
        isFullInventory={true}
        onDeleteClick={handleDeleteClick}
        inventory={inventory}
        setInventory={setInventory}
      />

      <InventoryDeleteModal
        isOpen={showModal}
        onClose={handleCloseModal}
        onDelete={handleConfirmDelete}
        itemName={selectedItem?.item_name} // Ensure the correct key from the backend
      />
    </div>
  );
}

export default Inventory;
