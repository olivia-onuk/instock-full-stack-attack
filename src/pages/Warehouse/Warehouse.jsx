import { Link } from "react-router-dom";

import "./Warehouse.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { P1, P2, P3 } from '../../components/Typography/Typography';
import { Link } from 'react-router-dom'
import searchIcon from "../../assets/icons/search-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";

function Warehouse() {
  const [query, setQuery] = useState("");
  // const [warehouses, setWarehouses] = useState([]);


  // useEffect(() => {
  //   const getWarehouses = async() => {
  //     const resp = await fetchWarehouses();
  //     setWarehouses(resp);
  //   }
  //   getWarehouses();
  // }, []);

  const handleSearch = async() => {
    if(query.trim()!== "") {
      searchWarehouse(query);
    }
  }

  const handleDelete = async () => {
    const success = await deleteWarehouse(warehouse.id);
    if(success) {
      console.log("Warehouse deleted successfully");
    } else {
      console.log("Failed to delete warehouse");
    }
  }

  const warehouses = [
    {
      id: 1,
      warehouse_name: 'Manhattan',
      address: '503 Broadway',
      city: 'New York',
      country: 'USA',
      contact_name: 'Parmin Aujla',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'paujla@instock.com',
    },
    {
      id: 2,
      warehouse_name: 'Washington',
      address: '33 Pearl Street SW',
      city: 'Washington',
      country: 'USA',
      contact_name: 'Greame Lyon',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'glyon@instock.com',
    },
    {
      id: 3,
      warehouse_name: 'Jersey',
      address: '300 Main Street',
      city: 'New Jersey',
      country: 'USA',
      contact_name: 'Brad MacDonald',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'bmcdonald@instock.com',
    },
    {
      id: 4,
      warehouse_name: 'SF',
      address: '890 Brannnan Street',
      city: 'San Francisco',
      country: 'USA',
      contact_name: 'Gary Wong',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'gwong@instock.com',
    },
    {
      id: 5,
      warehouse_name: 'Santa Monica',
      address: '520 Broadway',
      city: 'Santa Monica',
      country: 'USA',
      contact_name: 'Sharon Ng',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'sng@instock.com',
    },
    {
      id: 6,
      warehouse_name: 'Seattle',
      address: '1201 Third Avenue',
      city: 'Seattle',
      country: 'USA',
      contact_name: 'Daniel Bachu',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'dbachu@instock.com',
    },
    {
      id: 7,
      warehouse_name: 'Miami',
      address: '2650 NW 5th Avenue',
      city: 'Miami',
      country: 'USA',
      contact_name: 'Alana Thomas',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'athomas@instock.com',
    },
    {
      id: 8,
      warehouse_name: 'Boston',
      address: '215 Essex Street',
      city: 'Boston',
      country: 'USA',
      contact_name: 'Vanessa Mendoza',
      contact_position: 'Warehouse Manager',
      contact_phone: '+1 (646) 123-1234',
      contact_email: 'vmendoza@instock.com',
    },
  ]

  return(
    <div className="warehouses-section">
      <div className="warehouses-hero">
        <h1 className="warehouses-title">Warehouses</h1>
        <div className="warehouse-search">
          <input 
          type="text" 
          className="warehouse-search__input" 
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <img src={searchIcon} alt="Search" className="warehouse-search__icon" onClick={handleSearch} />
        </div>
        <button className="add-warehouse-button"><h3>+ Add New Warehouse</h3></button>
      </div>
      <div className="warehouse_tablet-labels">
        <span className="warehouse_tablet_label">
        <h4>WAREHOUSE</h4>
        <img src={sortIcon} alt="sort" />
        </span>
        <span className="warehouse_tablet_label">
        <h4>ADDRESS</h4>
        <img src={sortIcon} alt="sort" />
        </span>
        <span className="warehouse_tablet_label">
        <h4>CONTACT NAME</h4>
        <img src={sortIcon} alt="sort" />
        </span>
        <span className="warehouse_tablet_label">
        <h4>CONTACT INFORMATION</h4>
        <img src={sortIcon} alt="sort" />
        </span>
        <span className="warehouse_tablet_label">
        <h4>ACTIONS</h4>
        </span>
      </div>
      <div className="warehouse-list">
        {warehouses.map((warehouse) => (
          <div key={warehouse.id} className="warehouse-item">
            <div className="warehouse-item__content">
              <div className="warehouse-item__columns">
                <div className="warehouse-item__column">
                  <div className="warehouse-item__attribute">
                    <h4 className="warehouse-item__label">WAREHOUSE</h4>
                    <Link to={`/warehouse/${warehouse.id}`} className="warehouse-item__link">
                      <h3>{warehouse.warehouse_name}</h3>
                      <img src={chevronIcon} alt="chevron" className="warehouse-item__link-icon"/>
                    </Link>
                  </div>

                  <div className="warehouse-item__attribute">
                    <h4 className="warehouse-item__label">ADDRESS</h4>
                    <P2>{warehouse.address}, {warehouse.city}, {warehouse.country}</P2>
                  </div>
                </div>

                <div className="warehouse-item__column">
                  <div className="warehouse-item__attribute">
                    <h4 className="warehouse-item__label">CONTACT NAME</h4>
                    <P2>{warehouse.contact_name}</P2>
                  </div>

                  <div className="warehouse-item__attribute">
                    <h4 className="warehouse-item__label">CONTACT INFORMATION</h4>
                    <P2>
                      {warehouse.contact_phone}
                      {warehouse.contact_email}
                    </P2>
                  </div>
                </div>
              </div>
            </div>
            <div className="warehouse-item__actions">
              <img 
                src={deleteIcon} 
                alt="delete"
                onClick={handleDelete}
                className="warehouse-item__delete-icon"
              />
              <Link to={`/warehouse/edit/${warehouse.id}`}>
                <img src={editIcon} alt="edit" />
              </Link>
            </div>
          </div>
        ))}


      </div>
    </div>

  )
}

export default Warehouse;
