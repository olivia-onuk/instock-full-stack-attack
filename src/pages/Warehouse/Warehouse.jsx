import { Link } from "react-router-dom";

import "./Warehouse.scss";

function Warehouse() {
  return (
    <>
      <Link to="/warehouse/add">
        <button>+ Add New Warehouse</button>
      </Link>
    </>
  );
}

export default Warehouse;
