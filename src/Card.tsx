import { useCallback, useRef } from "react";
import back from "./frontCard.jpg";

export interface ICard {
    title: string;
    text: string;
    id: string;
}

export default function Card({ text, title }:ICard) {
    const ref = useRef<HTMLDivElement>(null);
    
    const clickHandler = useCallback(() => {
        ref.current?.classList.toggle("hidden");
    } , []);

    return(
        <>
            <div onClick={clickHandler} className="item">
                <img src={back} />
                <div ref={ref} className="back hidden">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}