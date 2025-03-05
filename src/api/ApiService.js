import axios from "axios";

BASE_URL = "http://localhost:8080"

export const fetchWarehouses = async () => {
    try {
        const resp = await axios.get(
            `${BASE_URL}/warehouses`
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
            `${BASE_URL}/warehouses/${id}`
        );
        return resp.data;
    } catch (error) {
        console.log(error);
        alert('Failed to fetch Warehouse. Please try again.');
    }
}

export const deleteWarehoue = async(id) => {
    try {
        await axios.delete(`${BASE_URL}/warehouse/${id}`);
    } catch (error) {
        console.log(error);
    }
}