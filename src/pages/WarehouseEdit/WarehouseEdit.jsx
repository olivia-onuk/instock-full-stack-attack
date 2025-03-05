import "./WarehouseEdit.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../assets/icons/arrow_back-24px.svg";

function WarehouseEdit() {
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  const { id } = useParams();

  console.log("WarehouseEdit component is rendering with ID:", id);

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
    if (phoneNumber.length !== 10 || isNaN(Number(phoneNumber))) {
      errorObject.phoneNumber = "Phone number must be 10 digits.";
    }

    if (
      !email.includes("@") ||
      !email.includes(".") ||
      email.indexOf("@") > email.lastIndexOf(".")
    ) {
      errorObject.email = "Invalid email format";
    }
    setError(errorObject);

    return Object.keys(errorObject).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const formInput = {
      warehouseName: warehouseName,
      streetAddress: streetAddress,
      city: city,
      country: country,
      contactName: contactName,
      position: position,
      phoneNumber: phoneNumber,
      email: email,
    };

    setWarehouseName("");
    setStreetAddress("");
    setCity("");
    setCountry("");
    setContactName("");
    setPosition("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <>
      <Header />
      <section className="edit-warehouse">
        <div className="edit-warehouse__link">
          <img className="edit-warehouse__link-arrow" src={Arrow} />
          <h1 className="edit-warehouse__link-title">Edit Warehouse</h1>
        </div>

        <form className="edit-warehouse__form" onSubmit={handleSubmit}>
          <div className="edit-warehouse__form-section">
            <div className="edit-warehouse__form-section-details">
              <h2 className="edit-warehouse__form-section-details-title">
                Warehouse Details
              </h2>

              <label htmlFor="warehouseName">Warehouse Name</label>
              <input
                type="text"
                name="warehouseName"
                id="warehouseName"
                value={warehouseName}
                onChange={handleWarehouseNameInput}
                className={error.warehouseName ? "input-error" : ""}
              />

              <label htmlFor="streetAddress">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                value={streetAddress}
                onChange={handleStreetAddressInput}
                className={error.streetAddress ? "input-error" : ""}
              />

              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={handleCityInput}
                className={error.city ? "input-error" : ""}
              />

              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                value={country}
                onChange={handleCountryInput}
                className={error.country ? "input-error" : ""}
              />
            </div>

            <div className="edit-warehouse__form-section-contact">
              <h2 className="edit-warehouse__form-section-contact-title">
                Contact Details
              </h2>

              <label htmlFor="contactName">Contact Name</label>
              <input
                type="text"
                name="contactName"
                id="contactName"
                value={contactName}
                onChange={handleContactNameInput}
                className={error.contactName ? "input-error" : ""}
              />

              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                id="position"
                value={position}
                onChange={handlePositionInput}
                className={error.position ? "input-error" : ""}
              />

              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberInput}
                className={error.phoneNumber ? "input-error" : ""}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailInput}
                className={error.email ? "input-error" : ""}
              />
            </div>
          </div>

          <div className="edit-warehouse__form-button">
            <button
              className="edit-warehouse__form-button-cancel"
              type="button"
            >
              Cancel
            </button>
            <button className="edit-warehouse__form-button-save" type="submit">
              Save
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default WarehouseEdit;
