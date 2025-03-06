import "./InventoryItemDetails.scss";

function InventoryItemDetails({ item }) {
  if (!item) return <p>Loading...</p>;

  return (
    <section className="inventory-item-details">
      <div className="inventory-item-details__content">
        <h4>ITEM DESCRIPTION:</h4>
        <p>{item.description}</p>
      </div>
      <div className="inventory-item-details__content">
        <h4>CATEGORY:</h4>
        <p>{item.category}</p>
      </div>
      <div className="inventory-item-details__section">
        <div className="inventory-item-details__content">
          <h4>STATUS:</h4>
          <p
            className={`status ${
              item.status === "In Stock"
                ? "status--instock"
                : "status--outofstock"
            }`}
          >
            {item.status}
          </p>
        </div>
        <div>
          <h4>QUANTITY:</h4>
          <p>{item.quantity}</p>
        </div>
      </div>
      <div className="inventory-item-details__content">
        <h4>WAREHOUSE:</h4>
        <p>{item.warehouse_name}</p>
      </div>
    </section>
  );
}

export default InventoryItemDetails;
