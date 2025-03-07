import { useState, useEffect } from "react";
import "./InventoryForm.scss";

function InventoryForm({ formtype, item, buttonLabel }) {
  const [error, setError] = useState(false);
  const [radio, setRadio] = useState(null);

  const handleColorChange = (e) => {
    setRadio(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <form id={formtype} className="inventory-form" onSubmit={handleSubmit}>
      <div className="inventory-form__main">
        <div className="inventory-form__column">
          <h2 className="inventory-form__title">Item Details</h2>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Item Name</label>
            <input
              type="text"
              id="itemName"
              className="inventory-form__input"
              placeholder="Item Name"
            />
          </div>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Description</label>
            <textarea
              type="text"
              id="itemDescription"
              className="inventory-form__input inventory-form__input--large"
              placeholder="Please enter a brief description..."
            />
          </div>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Category</label>
            <select
              className="inventory-form__dropdown"
              name="category"
              id="category"
            >
              <option value="" disabled selected hidden>
                Please Select
              </option>
              <option value="Accessories">Accessories</option>
              <option value="Apparel">Apparel</option>
              <option value="Electronics">Television</option>
              <option value="Gear">Gear</option>
              <option value="Health">Health</option>
            </select>
          </div>
        </div>
        <div className="inventory-form__column inventory-form__column--border">
          <h2 className="inventory-form__title">Item Availability</h2>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Status</label>
            <div className="inventory-form__radio-button">
              <input
                type="radio"
                name="status"
                value="instock"
                className="inventory-form__stock inventory-form__stock--instock"
                onChange={handleColorChange}
              />
              <label
                className={`inventory-form__radio-label ${
                  radio === "instock"
                    ? "inventory-form__radio-label--active"
                    : ""
                }`}
              >
                In stock
              </label>
              <input
                type="radio"
                name="status"
                value="outofstock"
                className="inventory-form__stock inventory-form__stock--outofstock"
                onChange={handleColorChange}
              />
              <label
                className={`inventory-form__radio-label ${
                  radio === "outofstock"
                    ? "inventory-form__radio-label--active"
                    : ""
                }`}
              >
                Out of stock
              </label>
            </div>
          </div>
          <div
            className={`inventory-form__input-section ${
              radio === "outofstock" ? "inventory-form__input-section--invisible" : ""
            }`}
          >
            <label className="inventory-form__input-label">Quantity</label>
            <input
              type="number"
              id="qty"
              className="inventory-form__input inventory-form__input--small"
              placeholder="0"
            />
          </div>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Warehouse</label>
            <select
              className="inventory-form__dropdown"
              name="warehouse"
              id="warehouse"
            >
              <option value="" disabled selected hidden>
                Please Select
              </option>
              <option value="Manhattan">Manhattan</option>
              <option value="Washington">Washington</option>
              <option value="Jersey">Jersey</option>
              <option value="San Fran">San Fran</option>
              <option value="Santa Monica">Santa Monica</option>
              <option value="Seattle">Seattle</option>
              <option value="Miami">Miami</option>
            </select>
          </div>
        </div>
      </div>
      <div className="inventory-form__buttons">
        <button className="inventory-form__button inventory-form__button--cancel">
          Cancel
        </button>
        <button className="inventory-form__button inventory-form__button--action">
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}

export default InventoryForm;
