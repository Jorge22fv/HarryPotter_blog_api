import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import hogwart from "../../../img/hogwart.png"

const Gryffindor = () => {
    const { store } = useContext(Context);

    return (
        <div className="house-container">
            <h3 className="welcome-message">Gryffindor</h3>
            <div className="row">
                {store.gryffindorCharacters.map((character, i) => (
                    <div className="col-md-3 col-xl-2" key={i}>
                        <Link to={`/profile/Gryffindor/${character.name}`} className="text-decoration-none link-dark">
                            <div className="card house-card">
                                <img
                                    src={character.image ? character.image : hogwart}
                                    className="house-image"
                                    alt={character.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title house-title">{character.name}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gryffindor;
