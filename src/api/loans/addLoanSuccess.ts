import { QueryClient } from "@tanstack/react-query";

export function addLoanSuccess(data: unknown, queryClient: QueryClient){
    console.log(data);
}