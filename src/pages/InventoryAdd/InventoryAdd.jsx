import "./InventoryAdd.scss";
import FormHero from "../../components/FormHero/FormHero";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

function InventoryAdd() {
  return (<>
    <div className=" main inventroy-add">
      <FormHero title={"Add New Inventory Item"}/>
      <InventoryForm formtype={"addInventoryForm"} buttonLabel={"+ Add Item"}/>
    </div>
  </>);
}

export default InventoryAdd;
