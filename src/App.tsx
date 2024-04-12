import { useState } from "react";
import mock from "./mock.json";
import Card, { ICard } from "./Card";

export default function App() {
    const [selectedElement, setSelectedElement] = useState<ICard>(mock[0]);

    function pressHandler() {
        const randomNumber = Math.floor(Math.random() * 22);

        setSelectedElement(mock[randomNumber]);
    }

    return (
        <>
            <div className="container">
                <div onClick={pressHandler} >
                    <Card  {...selectedElement} />
                </div>
            </div>
        </>
    );
}
