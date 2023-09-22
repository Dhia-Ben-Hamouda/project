import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
import "./styles/index.scss";

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);
const client = new QueryClient();

const theme = createTheme({
    palette:{
        primary:{
            main:"#016837"
        }
    }
})

root.render(
    <QueryClientProvider client={client} >
        <ThemeProvider theme={theme} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </QueryClientProvider>
)