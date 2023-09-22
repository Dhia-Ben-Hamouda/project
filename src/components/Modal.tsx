import React, { useRef } from "react";
import { ModalProps } from "../@types/types";

export default function Modal({ children , setIsOpen , isOpen }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    function closeModal(e: React.MouseEvent){
        if(e.target === overlayRef.current ) setIsOpen(false);
    }   

    return(
        <div ref={overlayRef} onClick={closeModal} className={`overlay ${!isOpen && "hidden"}`} >
            <div className="modal">
                {
                    children
                }
            </div>
        </div>
    )
}