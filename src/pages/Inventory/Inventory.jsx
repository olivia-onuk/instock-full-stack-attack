import "./Inventory.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search-24px.svg";
import InventoryDeleteModal from "../../components/InventoryDeleteModal/InventoryDeleteModal";

function Inventory() {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [inventory, setInventory] = useState([
    { id: 1, name: "Television" },
    { id: 2, name: "Gym Bag" },
    { id: 3, name: "Kitchen Utensils" },
    { id: 4, name: "Cleaning Supplies" },
    { id: 5, name: "Stationery" },
  ]);

  const handleSearch = async () => {
    if (query.trim() !== "") {
      searchWarehouse(query);
    }
  };

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
      // TODO: Replace with API call when backend is ready
      console.log(`Deleting ${selectedItem.name}...`);

      // Temporarily remove the item from state (for frontend testing)
      setInventory((prev) =>
        prev.filter((item) => item.id !== selectedItem.id)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }

    handleCloseModal();
  };

  return (
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
      <InventoryList isFullInventory={true} onDeleteClick={handleDeleteClick} />

      <InventoryDeleteModal
        isOpen={showModal}
        onClose={handleCloseModal}
        onDelete={handleConfirmDelete}
        itemName={selectedItem?.name}
      />
    </div>
  );
}

export default Inventory;
