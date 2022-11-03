import React from "react";

export default function PokeCard({ name, types, id, img }) {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{types}</h3>
            <img src={img} alt = "img not found" width ="150px" height="150px"/>
        </div>
    )
}