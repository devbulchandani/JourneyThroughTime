import { PeriodFormData } from "./pages/AddPeriodForm";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const addPeriod = async (formdata : PeriodFormData) => {
    const response = await fetch(`${API_BASE_URL}/period`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
    })

    const responseBody = await response.json();
    if (!response.ok) {
        throw new Error(responseBody.message);
    }
    return responseBody;
}

export const getPeriodByEra = async (era : string) => {
    const response = await fetch(`${API_BASE_URL}/period/${era}`, {
        method: "GET"
    })

    if (!response.ok) {
        throw new Error("Error fetching hotel");
    }

    const data = await response.json(); // Parse JSON data
    return data;
}