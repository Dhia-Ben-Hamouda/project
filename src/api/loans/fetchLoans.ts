import api from "../axios";

export async function fetchLoans(){
    const response = await api.get("/api/loans/getAllLoans");
    return response.data;
}