import React, { useContext } from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";

export const CharacterList= ()=>{

    const { store } = useContext(Context);

    return(
        <div>
            <div className="row border-none">
                {store.slytherinCharacters.length > 0 && store.slytherinCharacters.map((character, i) => (
                    <div className="card col-md-4" key={i}>
                        <Card character={character} />
                    </div>
                ))}
            </div>
        </div>
    )
}