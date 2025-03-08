import "./WarehouseAdd.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Arrow from "../../assets/icons/arrow_back-24px.svg";
import Error from "../../assets/icons/error-24px.svg";
import { addWarehouse } from "../../api/ApiService";

function WarehouseAdd() {
  const navigate = useNavigate();
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  const handleWarehouseNameInput = (event) => {
    setWarehouseName(event.target.value);
    setError((prevErrors) => ({ ...prevErrors, warehouseName: "" }));
  };

  const handleStreetAddressInput = (event) => {
    setStreetAddress(event.target.value);
    setError((prevErrors) => ({ ...prevErrors, streetAddress: "" }));
  };

  const handleCityInput = (event) => {
    setCity(event.target.value);
    setError((prevErrors) => ({ ...prevErrors, city: "" }));
  };

  const handleCountryInput = (event) => {
    setCountry(event.target.value);
    setError((prevErrors) => ({ ...prevErrors, country: "" }));
  };

  const handleContactNameInput = (event) => {
    setContactName(event.target.value);
    setError((prevErrors) => ({ ...prevErrors, contactName: "" }));
  };

  const handlePositionInput = (event) => {
    setPosition(event.target.value);
    setError((prevErrors) => ({ ...prevErrors, position: "" }));
  };

  const handlePhoneNumberInput = (event) => {
    setPhoneNumber(event.target.value);
    setError((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
    setError((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const validateForm = () => {
    const errorObject = {};
    if (!warehouseName.trim()) {
      errorObject.warehouseName = "Warehouse Name is required";
    }
    if (!streetAddress.trim()) {
      errorObject.streetAddress = "Street Address is required";
    }
    if (!city.trim()) {
      errorObject.city = "City is required";
    }
    if (!country.trim()) {
      errorObject.country = "Country is required";
    }
    if (!contactName.trim()) {
      errorObject.contactName = "Name is required";
    }
    if (!position.trim()) {
      errorObject.position = "Position is required";
    }

    const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!phoneRegex.test(phoneNumber)) {
      errorObject.phoneNumber = "Invalid phone number format.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorObject.email = "Invalid email format.";
    }
    setError(errorObject);

    return Object.keys(errorObject).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const newWarehouse = {
      warehouse_name: warehouseName,
      address: streetAddress,
      city: city,
      country: country,
      contact_name: contactName,
      contact_position: position,
      contact_phone: phoneNumber,
      contact_email: email,
    };

    try {
      await addWarehouse(newWarehouse); //
      navigate("/warehouse"); //
    } catch (error) {
      console.error("Error adding warehouse:", error);
    }
  };

  return (
    <>
      <section className="main add-warehouse">
        <div className="add-warehouse__link">
          <Link to="/warehouse">
            <img className="add-warehouse__link-arrow" src={Arrow} />
          </Link>
          <h1 className="add-warehouse__link-title">Add New Warehouse</h1>
        </div>

        <form className="add-warehouse__form" onSubmit={handleSubmit}>
          <div className="add-warehouse__form-section">
            <div className="add-warehouse__form-section-details">
              <h2 className="add-warehouse__form-section-details-title">
                Warehouse Details
              </h2>

              <label htmlFor="warehouseName">Warehouse Name</label>
              <input
                type="text"
                name="warehouseName"
                id="warehouseName"
                placeholder="Warehouse Name"
                value={warehouseName}
                onChange={handleWarehouseNameInput}
                className={error.warehouseName ? "input-error" : ""}
              />

              {error.warehouseName && (
                <div className="error-container">
                  <img src={Error} alt="Error Icon" className="error-icon" />
                  <p className="error-message">{error.warehouseName}</p>
                </div>
              )}

              <label htmlFor="streetAddress">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                placeholder="Street Address"
                value={streetAddress}
                onChange={handleStreetAddressInput}
                className={error.streetAddress ? "input-error" : ""}
              />
              {error.streetAddress && (
                <div className="error-container">
                  <img src={Error} alt="Error Icon" className="error-icon" />
                  <p className="error-message">{error.streetAddress}</p>
                </div>
              )}

              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                value={city}
                onChange={handleCityInput}
                className={error.city ? "input-error" : ""}
              />
              {error.city && (
                <div className="error-container">
                  <img src={Error} alt="Error Icon" className="error-icon" />
                  <p className="error-message">{error.city}</p>
                </div>
              )}

              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Country"
                value={country}
                onChange={handleCountryInput}
                className={error.country ? "input-error" : ""}
              />
              {error.country && (
                <div className="error-container">
                  <img src={Error} alt="Error Icon" className="error-icon" />
                  <p className="error-message">{error.country}</p>
                </div>
              )}
            </div>

            <div className="add-warehouse__form-section-contact">
              <h2 className="add-warehouse__form-section-contact-title">
                Contact Details
              </h2>

              <label htmlFor="contactName">Contact Name</label>
              <input
                type="text"
                name="contactName"
                id="contactName"
                placeholder="Contact Name"
                value={contactName}
                onChange={handleContactNameInput}
                className={error.contactName ? "input-error" : ""}
              />
              {error.contactName && (
                <div className="error-container">
                  <img src={Error} alt="Error Icon" className="error-icon" />
                  <p className="error-message">{error.contactName}</p>
                </div>
              )}

              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Position"
                value={position}
                onChange={handlePositionInput}
                className={error.position ? "input-error" : ""}
              />
              {error.position && (
                <div className="error-container">
                  <img src={Error} alt="Error Icon" className="error-icon" />
                  <p className="error-message">{error.position}</p>
                </div>
              )}

              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberInput}
                className={error.phoneNumber ? "input-error" : ""}
              />
              {error.phoneNumber && (
                <div className="error-container">
                  <img src={Error} alt="Error Icon" className="error-icon" />
                  <p className="error-message">{error.phoneNumber}</p>
                </div>
              )}

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailInput}
                className={error.email ? "input-error" : ""}
              />
              {error.email && (
                <div className="error-container">
                  <img src={Error} alt="Error Icon" className="error-icon" />
                  <p className="error-message">{error.email}</p>
                </div>
              )}
            </div>
          </div>

          <div className="add-warehouse__form-button">
            <button
              className="add-warehouse__form-button-cancel"
              type="button"
              onClick={() => navigate("/warehouse")}
            >
              Cancel
            </button>
            <button
              className="add-warehouse__form-button-addwarehouse"
              type="submit"
            >
              + Add Warehouse
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default WarehouseAdd;
