import React, { useState } from "react";
import logo from "./assets/images/logo.png";
import Loan from "./components/Loan";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "./components/Modal";
import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { addLoan } from "./api/loans/addLoan";
import { addLoanSuccess } from "./api/loans/addLoanSuccess";
import { addLoanError } from "./api/loans/addLoanError";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [loan, setLoan] = useState({ name: "", budget: "" });
    const addLoanMutation = useMutation(addLoan, { onSuccess: addLoanSuccess, onError: addLoanError });

    function openModal() {
        setIsOpen(true);
    }

    function addLoanHandler(e: React.FormEvent) {
        e.preventDefault();
        addLoanMutation.mutate();
    }

    return (
        <>
            <section id="home-page">
                <div className="container">
                    <div className="wrapper">
                        <img src={logo} />
                        <h1>Sa<span>lef</span>ni.<span>tn</span></h1>
                    </div>
                    <div className="loans-container">
                        <div className="add-load-container">
                            <h1>My Loans</h1>
                            <button onClick={openModal} >
                                <FaPlusCircle />
                                <p>Add a loan</p>
                            </button>
                        </div>
                        <div className="loans">
                            <Loan />
                            <Loan />
                            <Loan />
                            <Loan />
                            <Loan />
                        </div>
                    </div>
                </div>
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
                    <form>
                        <TextField label="Enter name..." />
                        <TextField label="Enter budget..." />
                        <button onClick={addLoanHandler} >Add loan</button>
                    </form>
                </Modal>
            </section>
        </>
    )
}