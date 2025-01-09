import axios from "axios";

// Set the base URL of the FastAPI backend
const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Sample API call to fetch data from the backend
export const getSampleData = async () => {
    try {
        const response = await API.get("/sample");
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
