import React, { useState } from "react";
import profile from "../assets/images/profile.png";
import { FaTools, FaTrash } from "react-icons/fa";
import Modal from "./Modal";

export default function Loan() {
    const [isOpenDeletionModal, setIsOpenDeletionModal] = useState(false);
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);

    function openEditModal() {
        setIsOpenEditModal(true);
    }

    function openDeletionModal() {
        setIsOpenDeletionModal(true);
    }

    return (
        <>
            <div className="loan shadow">
                <img src={profile} />
                <h3>Riadh Korchid</h3>
                <p>Value: <span>4.800 DT</span></p>
                <div className="buttons-container">
                    <button onClick={openEditModal} className="edit-button" >
                        <FaTrash />
                        <p>Edit loan</p>
                    </button>
                    <button onClick={openDeletionModal} className="delete-button" >
                        <FaTools />
                        <p>Delete loan</p>
                    </button>
                </div>
            </div>
            <Modal isOpen={isOpenDeletionModal} setIsOpen={setIsOpenDeletionModal} >

            </Modal>
            <Modal isOpen={isOpenEditModal} setIsOpen={setIsOpenEditModal} >

            </Modal>
        </>
    )
}