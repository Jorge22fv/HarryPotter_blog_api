import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";


import hogwart from "../../../img/hogwart.png"



const Hufflepuff = () => {
    const { store, agregarAFavoritos } = useContext(Context);
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }

    return (
        <div className="house-container">
            <button onClick={goBack} className="float-start ms-3 mt-3 back"><i className="fas fa-reply"></i></button>
            <h3 className="welcome-message">Hufflepuff</h3>
            <div className="row">
                {store.hufflepuffCharacters.map((character, i) => (
                    <div className="col-md-3 col-xl-2 mb-5" key={i}>
                        <div className="card house-card">
                            <img
                                src={character.image ? character.image : hogwart}
                                className="house-image"
                                alt={character.name} />
                            <div className="card-body">
                                <h5 className="card-title house-title">{character.name}</h5>
                                <div className="button-container">
                                    <Link
                                        to={`/profile/Hufflepuff/${character.name}`}
                                        className="btn btn-details">
                                        Details
                                    </Link>
                                    <button
                                        onClick={() => agregarAFavoritos(character)}
                                        className="btn btn-favorite"
                                    >
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hufflepuff;

