import { Link } from "react-router-dom";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import "./InventoryForm.scss";

function InventoryForm({ formtype }) {
  const handleSubmit = () => {};

  return (
    <form id={formtype} className="form" onSubmit={handleSubmit}>
      <div className="inventory-form-main">
        <div className="inventory-form__column">
          <h2 className="inventory-form__title">Item Details</h2>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Item Name</label>
            <input type="text" id="itemName" className="inventory-form__input"/>
          </div>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Description</label>
            <input type="text" id="itemDescription" className="inventory-form__input inventory-form__input--large"/>
          </div>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Category</label>
          </div>
        </div>
        <div className="inventory-form__column">
          <h2 className="inventory-form__title">Item Availability</h2>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Status</label>
          </div>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Quantity</label>
          </div>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Warehouse</label>
          </div>
        </div>
      </div>
      <div className="inventory-form__buttons"></div>
    </form>
  );
}

export default InventoryForm;
