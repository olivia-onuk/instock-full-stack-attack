import "./InventoryAdd.scss";
import FormHero from "../../components/FormHero/FormHero";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import { addInventory } from "../../api/ApiService";

function InventoryAdd() {
  
  function postInventory(inv) {
    try {
      addInventory(inv);
    } catch (error) {
      console.error("Error posting inventory:", error);
    }
  }
  
  return (<>
    <div className=" main inventroy-add">
      <FormHero title={"Add New Inventory Item"}/>
      <InventoryForm formtype={"addInventoryForm"} buttonLabel={"+ Add Item"} handleUpdate={postInventory}/>
    </div>
  </>);
}

export default InventoryAdd;
