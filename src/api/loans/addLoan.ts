import { Loan } from "../../@types/types";
import api from "../axios";
import toast from "react-hot-toast";

export async function addLoan(loan: Loan) {
    toast.loading("adding loan...", { id: "loanToast" });
    const response = await api.post("/api/loans/addLoan", loan);
    return response.data;
}