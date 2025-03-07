import "./InventoryEdit.scss";
import FormHero from "../../components/FormHero/FormHero";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import { updateInventory } from "../../api/ApiService";

function InventoryEdit() {
  function putInventory(inv) {
    try {
      updateInventory(inv);
    } catch (error) {
      console.error("Error posting inventory:", error);
    }
  }

  return (
    <>
      <div className=" main inventroy-add">
        <FormHero title={"Edit Inventory"} />
        <InventoryForm
          formtype={"editInventoryForm"}
          buttonLabel={"Save"}
          handleUpdate={putInventory}
        />
      </div>
    </>
  );
}

export default InventoryEdit;
