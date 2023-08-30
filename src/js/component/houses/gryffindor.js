import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import hogwart from "../../../img/hogwart.png"

const Gryffindor = () => {
    const { store } = useContext(Context);

    return (
        <div className="house-container">
            <div className="row">
                {store.gryffindorCharacters.map((character, i) => (
                    <div className="col-md-3 col-xl-2" key={i}>
                        <div className="card house-card">
                            <img src={character.image ? character.image : hogwart} className="card-img-top house-image" alt={character.name} />
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

export default Gryffindor;
