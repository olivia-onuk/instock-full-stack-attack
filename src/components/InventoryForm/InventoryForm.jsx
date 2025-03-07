import { Link } from "react-router-dom";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import "./InventoryForm.scss";

function InventoryForm({ formtype }) {
  
const handleSubmit = () =>{
    
}  
  
return (
    <form id={formtype} className="form" onSubmit={handleSubmit}>
      <div className="inventory-form-main">
        <div className="inventory-form__column">
          <h2>Item Details</h2>
          <div className=""></div>
        </div>
        <div className="inventory-form__column">
          <h2>Item Availability</h2>
        </div>
      </div>
      <div className="inventory-form__buttons"></div>
    </form>
  );
}

export default InventoryForm;
