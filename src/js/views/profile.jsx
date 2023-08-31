import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import hogwart from "../../../img/hogwart.png";

const CharacterDetail = ({ character }) => {
    return (
        <div className="character-detail">
            <img src={character.image ? character.image : hogwart} className="character-image" alt={character.name} />
            <h5 className="character-name">{character.name}</h5>
            {/* Aquí puedes mostrar más detalles del personaje si es necesario */}
        </div>
    );
};

const HouseComponent = ({ houseCharacters }) => {
    const { store } = useContext(Context);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
    };

    return (
        <div className="house-container">
            <div className="row">
                {houseCharacters.map((character, i) => (
                    <div className="col-md-3 col-xl-2" key={i}>
                        <div className="card house-card" onClick={() => handleCharacterClick(character)}>
                            <img src={character.image ? character.image : hogwart} className="house-image" alt={character.name} />
                            <div className="card-body">
                                <h5 className="card-title house-title">{character.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
        </div>
    );
};

export default HouseComponent;
