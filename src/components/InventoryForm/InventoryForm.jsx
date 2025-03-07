import { useState, useEffect } from "react";
import "./InventoryForm.scss";
import errorIcon from "../../assets/icons/error-24px.svg"; 

function InventoryForm({
  formtype,
  item,
  buttonLabel,
  handleUpdate = () => {},
}) {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [radio, setRadio] = useState(null);
  const [error, setError] = useState(false);

  const handleChangeRadio = (e) => {
    setRadio(e.target.value);
  };

  const handleChangeItemName = (event) => {
    setItemName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setItemDescription(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeQty = (event) => {
    setQty(event.target.value);
  };

  const handleChangeWarehouse = (event) => {
    setWarehouse(event.target.value);
  };

  const isFormValid = () => {
    if (
      !itemName.trim() ||
      !itemDescription.trim() ||
      !category.trim() ||
      !warehouse.trim() ||
      !radio
    ) {
      return false;
    } else if (radio == "instock" && !itemDescription.trim()) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      try {
        setError(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };
  
  return (
    <form id={formtype} className="inventory-form" onSubmit={handleSubmit}>
      <div className="inventory-form__main">
        <div className="inventory-form__column">
          <h2 className="inventory-form__title">Item Details</h2>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label ">Item Name</label>
            <input
              type="text"
              id="itemName"
              className={`inventory-form__input ${
                error && !itemName.trim() ? "inventory-form__input--error" : ""
              }`}
              placeholder="Item Name"
              onChange={handleChangeItemName}
            />
            <p className={`inventory-form__error-text ${
                error && !itemName.trim()
                  ? "inventory-form__input--visible"
                  : ""
              }`}><img src={errorIcon} alt="error"/>This field is required</p>
          </div>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Description</label>
            <textarea
              type="text"
              id="itemDescription"
              className={`inventory-form__input inventory-form__input--large ${
                error && !itemDescription.trim()
                  ? "inventory-form__input--error"
                  : ""
              }`}
              placeholder="Please enter a brief description..."
              onChange={handleChangeDescription}
            />
          </div>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Category</label>
            <select
              className={`inventory-form__dropdown ${
                error && !category.trim()
                  ? "inventory-form__dropdown--error"
                  : ""
              }`}
              name="category"
              id="category"
              onChange={handleChangeCategory}
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
                className={`inventory-form__stock inventory-form__stock--instock ${
                  error && !radio
                    ? "inventory-form__stock--error"
                    : ""
                }`}
                onChange={handleChangeRadio}
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
                className={`inventory-form__stock inventory-form__stock--outofstock ${
                  error && !radio
                    ? "inventory-form__stock--error"
                    : ""
                }`}
                onChange={handleChangeRadio}
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
              radio === "outofstock"
                ? "inventory-form__input-section--invisible"
                : ""
            }`}
          >
            <label className="inventory-form__input-label">Quantity</label>
            <input
              type="number"
              id="qty"
              className={`inventory-form__input inventory-form__input--small ${error && !qty.trim() ? "inventory-form__input--error" : ""}`}
              placeholder="0"
              onChange={handleChangeQty}
            />
          </div>
          <div className="inventory-form__input-section">
            <label className="inventory-form__input-label">Warehouse</label>
            <select
              className={`inventory-form__dropdown ${
                error && !warehouse.trim()
                  ? "inventory-form__dropdown--error"
                  : ""
              }`}
              name="warehouse"
              id="warehouse"
              onChange={handleChangeWarehouse}
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
