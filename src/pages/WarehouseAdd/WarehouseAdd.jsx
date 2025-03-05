import "./WarehouseAdd.scss";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Arrow from "../../assets/icons/arrow_back-24px.svg";
import { useEffect, useState } from "react";

function WarehouseAdd() {
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
  };

  const handleStreetAddressInput = (event) => {
    setStreetAddress(event.target.value);
  };

  const handleCityInput = (event) => {
    setCity(event.target.value);
  };

  const handleCountryInput = (event) => {
    setCountry(event.target.value);
  };

  const handleContactNameInput = (event) => {
    setContactName(event.target.value);
  };

  const handlePositionInput = (event) => {
    setPosition(event.target.value);
  };

  const handlePhoneNumberInput = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <Header />
      <section className="add-warehouse">
        <div className="add-warehouse__link">
          <img className="add-warehouse__link-arrow" src={Arrow} />
          <h1 className="add-warehouse__link-title">Add New Warehouse</h1>
        </div>

        <form className="add-warehouse__form">
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
                required
              />

              <label htmlFor="streetAddress">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                placeholder="Street Address"
                required
              />

              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                required
              />

              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Country"
                required
              />
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
                required
              />

              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Position"
                required
              />

              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="add-warehouse__form-button">
            <button className="add-warehouse__form-button-cancel" type="button">
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
      <Footer />
    </>
  );
}

export default WarehouseAdd;
