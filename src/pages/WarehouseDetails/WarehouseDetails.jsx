import "./WarehouseDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchWarehouse, fetchWarehouseInventory, deleteInventory } from "../../api/ApiService";
import WarehoudeDetailHero from "../../components/WarehouseDetailHero/WarehoudeDetailHero";
import WarehouseDetailSection from "../../components/WarehouseDetailSection/WarehouseDetailSection";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryDeleteModal from "../../components/InventoryDeleteModal/InventoryDeleteModal"; 

function WarehouseDetails() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState({});
  const [inventory, setInventory] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "item_name",
    order: "asc"
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadInventory = async () => {
    try {
      const resp = await fetchWarehouseInventory(
        id, 
        sortConfig.key, 
        sortConfig.order
      );
      setInventory(resp);
    } catch (error) {
      console.log("Error fetching inventory:", error);
    }
  };

  useEffect(() => {
    const getWarehouse = async () => {
      try {
        const resp = await fetchWarehouse(id);
        setWarehouse(resp);
      } catch (error) {
        console.log("Error fetching warehouse:", error);
      }
    };
    
    getWarehouse();
    loadInventory();
  }, [id, sortConfig]); 

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedItem(null);
    setIsDeleting(false);
  };

  const handleConfirmDelete = async () => {
    if (!selectedItem || isDeleting) return;
    
    try {
      setIsDeleting(true);
      await deleteInventory(selectedItem.id);
      setInventory(prev => prev.filter(item => item.id !== selectedItem.id));
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      handleCloseDeleteModal();
    }
  };

  const handleSort = (column) => {
    setSortConfig(prev => ({
      key: column,
      order: prev.key === column && prev.order === "asc" ? "desc" : "asc"
    }));
  };


  if (!warehouse) {
    return <p>Loading warehouse details...</p>;
  }

  return(
    <div className="main warehouse-detail-page">
      <WarehoudeDetailHero id={id} warehouse={warehouse} />
      <WarehouseDetailSection warehouse={warehouse} />
      <InventoryList 
      inventory={inventory} 
      isFullInventory={false}
      onSort={handleSort}
      onDeleteClick={handleDeleteClick} 
      />
      <InventoryDeleteModal
        isOpen={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onDelete={handleConfirmDelete}
        itemName={selectedItem?.item_name}
      />
    </div>
  );
}

export default WarehouseDetails;
