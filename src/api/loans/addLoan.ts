import { Loan } from "../../@types/types";
import api from "../axios";

export async function addLoan(loan: Loan) {
    const response = await api.post("/api/loans/addLoan", loan);
    return response.data;
}