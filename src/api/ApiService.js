import axios from "axios";

const BASE_URL = "http://localhost:8080"

export const fetchWarehouses = async () => {
    try {
        const resp = await axios.get(
            `${BASE_URL}/api/warehouses`
        );
        return resp.data;
    } catch (error) {
        console.log(error);
        alert('Failed to fetch Warehouses. Please try again.');
    }
}

export const fetchWarehouse = async (id) => {
    try {
        const resp = await axios.get(
            `${BASE_URL}/api/warehouses/${id}`
        );
        return resp.data;
    } catch (error) {
        console.log(error);
        alert('Failed to fetch Warehouse. Please try again.');
    }
}


export const fetchWarehouseInventory = async (id) => {
    try {
        const resp = await axios.get(
            `${BASE_URL}/api/warehouses/${id}/inventories`
        );
        
        return resp.data;
    } catch (error) {
        console.log(error);
        alert('Failed to fetch warehouse inventory. Please try again.');
    }
}


export const deleteWarehouse = async(id) => {
    try {
        await axios.delete(`${BASE_URL}/api/warehouses/${id}`);
    } catch (error) {
        console.log(error);
    }
}