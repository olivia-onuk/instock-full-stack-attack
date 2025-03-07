import "./InventoryDetails.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-white-24px.svg";
import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";

function InventoryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/${id}`)
      .then((response) => setItem(response.data))
      .catch((error) => {
        console.error("Error fetching inventory item:", error);
        setError("Failed to load inventory item.");
      });
  }, [id]);

  if (error) return <p className="error-message">{error}</p>;
  if (!item) return <p className="loading-message">Loading...</p>;

  return (
    <section className="inventory-details">
      <div className="inventory-details__container">
        <div className="inventory-details__header">
          <div className="inventory-details__header-group">
            <img
              src={backArrow}
              alt="Back Arrow Icon"
              className="inventory-details__arrow"
              onClick={() => navigate("/inventory")}
            />
            <h1 className="inventory-details__title">{item.item_name}</h1>
          </div>
          <div
            className="inventory-details__button"
            onClick={() => navigate(`/inventory/edit/${id}`)}
          >
            <img
              src={editIcon}
              alt="Edit Button"
              className="inventory-details__edit-icon"
            />
            <span className="inventory-details__edit-text">Edit</span>
          </div>
        </div>
        <InventoryItemDetails item={item} />
      </div>
    </section>
  );
}

export default InventoryDetails;
