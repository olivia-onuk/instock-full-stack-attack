import "./InventoryEdit.scss";
import FormHero from "../../components/FormHero/FormHero";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import { updateInventory, getInventoryById } from "../../api/ApiService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function InventoryEdit() {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getInventoryItem = async () => {
      const data = await getInventoryById(id);
      setItem(data);
    }
    getInventoryItem();
  }, []);

  useEffect(() => {
    const getInventoryItem = async () => {
      const data = await getInventoryById(id);
      setItem(data);
    };
    getInventoryItem();
  }, [id]);

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
          item={item}
        />
      </div>
    </>
  );
}

export default InventoryEdit;
