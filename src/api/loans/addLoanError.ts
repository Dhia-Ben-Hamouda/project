import { AxiosError } from "axios";
import toast from "react-hot-toast";

export function addLoanError(error: AxiosError){
    const data = error.response?.data as Record<string, string>;
    toast.error(data.msg, { id: "loanToast" });
}