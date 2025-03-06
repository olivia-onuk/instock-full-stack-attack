import { useState } from "react";
import DeleteModal from "../../components/InventoryDeleteModal/InventoryDeleteModal.jsx";

const Inventory = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Television" },
    { id: 2, name: "Gym Bag" },
    { id: 3, name: "Kitchen Utensils" },
    { id: 4, name: "Cleaning Supplies" },
    { id: 5, name: "Stationery" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    setInventory((prevInventory) =>
      prevInventory.filter((item) => item.id !== selectedItem.id)
    );
    setShowModal(false);
  };

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDeleteClick(item)}>🗑️</button>
          </li>
        ))}
      </ul>

      {showModal && selectedItem && (
        <DeleteModal
          itemName={selectedItem.name}
          onDelete={handleConfirmDelete}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Inventory;
