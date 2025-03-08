import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const fetchWarehouses = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/api/warehouses`);
    return resp.data;
  } catch (error) {
    console.log(error);
    alert("Failed to fetch Warehouses. Please try again.");
  }
};

export const fetchWarehouse = async (id) => {
  try {
    const resp = await axios.get(`${BASE_URL}/api/warehouses/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
    alert("Failed to fetch Warehouse. Please try again.");
  }
};

export const deleteWarehoue = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/api/warehouses/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateWarehouse = async (id, warehouseData) => {
  try {
    const resp = await axios.put(
      `${BASE_URL}/api/warehouses/${id}`,
      warehouseData
    );
    return resp.data;
  } catch (error) {
    console.log(error);
    alert("Failed to update Warehouse. Please try again.");
  }
};

export const fetchWarehouseInventory = async (id) => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/api/warehouses/${id}/inventories`
    );

    return resp.data;
  } catch (error) {
    console.log(error);
    alert("Failed to fetch warehouse inventory. Please try again.");
  }
};

export const deleteWarehouse = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/api/warehouses/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const fetchInventories = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/api/inventories`);
    return resp.data;
  } catch (error) {
    console.log("Failed to fetch inventories. Please try again:", error);
  }
};

export const addInventory = async (inventoryItem) => {
  try {
    const resp = await axios.post(`${BASE_URL}/api/inventories`, inventoryItem);
    return resp.data;
  } catch (error) {
    console.log(error);
    alert("Failed to update Inventory. Please try again.");
  }
};

export const updateInventory = async (id, inventoryItem) => {
  try {
    const resp = await axios.put(
      `${BASE_URL}/api/inventories/${id}`,
      inventoryItem
    );
    return resp.data;
  } catch (error) {
    console.log(error);
    alert("Failed to update Inventory. Please try again.");
  }
};

export const searchInventories = async (query) => {
  try {
    const resp = await axios.get(`${BASE_URL}/api/inventories?search=${query}`);
    return resp.data;
  } catch (error) {
    console.error("Error searching inventory:", error);
  }
};

export const deleteInventory = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/api/inventories/${id}`);
  } catch (error) {
    console.error(`Error deleting inventory item with ID ${id}:`, error);
    throw error;
  }
};

export const getInventoryById = async (id) => {
  try {
    const resp = await axios.get(`${BASE_URL}/api/inventories/${id}`);
    return resp.data;
  } catch (error) {
    console.error(`Error getting inventory item with ID ${id}:`, error);
    throw error;
  }
};
