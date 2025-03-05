import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Warehouse from "./pages/Warehouse/Warehouse";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import WarehouseAdd from "./pages/WarehouseAdd/WarehouseAdd";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit";
import Inventory from "./pages/Inventory/Inventory";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd";
import InventoryEdit from "./pages/InventoryEdit/InventoryEdit";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouse />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/warehouse/:id" element={<WarehouseDetails />} />
        <Route path="/warehouse/add" element={<WarehouseAdd />} />
        <Route path="/warehouse/edit" element={<WarehouseEdit />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:id" element={<InventoryDetails />} />
        <Route path="/inventory/add" element={<InventoryAdd />} />
        <Route path="/inventory/edit" element={<InventoryEdit />} />
      </Routes>
    </Router>
  );
}

export default App;