import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import hogwart from "../../../img/hogwart.png"

const Ravenclaw = () => {
    const { store } = useContext(Context);

    return (
        <div className="house-container">
            <h3 className="welcome-message">Ravenclaw</h3>
            <div className="row">
                {store.ravenclawCharacters.map((character, i) => (
                    <div className="col-md-3 col-xl-2" key={i}>
                        <Link to={`/studentdetails/${character.name}`}></Link>
                        <div className="card house-card">
                            <img src={character.image ? character.image : hogwart} className="house-image" alt={character.name} />
                            <div className="card-body">
                                <h5 className="card-title house-title">{character.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ravenclaw;
