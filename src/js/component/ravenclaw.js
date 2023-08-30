import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Ravenclaw = () => {
    const { store } = useContext(Context);

    return (
        <div>
            <div className="row border-none">
                {store.ravenclawCharacters.map((character, i) => (
                    <div className="card col-md-4 border-none" key={i}>
                        <div className="card container border-none">
                            <div className="card">
                                <img src={character.image} className="card-img-top m-none p-none" alt={character.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <p className="card-text">{character.house}</p>
                                    <a href="#" className="btn btn-outline-dark">Ver Perfil</a>
                                    <button>agregar favorito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ravenclaw;
