import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import { fetchWarehouseInventory } from "../../api/ApiService";

function InventoryList({ isFullInventory }) {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const getInventory = async () => {
      const resp = await fetchWarehouseInventory();
      setInventory(resp);
    };
    if (!isFullInventory) {
      getInventory();
    }else{
      
    }
  }, []);

  return (
    <>
      <InventoryItem inventory={inventory} isFullInventory={isFullInventory} />
    </>
  );
}

export default InventoryList;
