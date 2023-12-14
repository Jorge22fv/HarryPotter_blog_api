import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profile.css"

import hogwart from "../../img/hogwart.png"

const Profile = () => {
    const { store } = useContext(Context);
    const { house, characterName } = useParams();
    const characters = store[house.toLowerCase() + "Characters"];
    const character = characters.find((char) => char.name === characterName);

    if (!character) {
        return <div className="loader-container">
            <div className="loader"></div>
        </div>;
    }

    return (
        <div className="profile-container">
            <h1 className="character-name">{character.name}</h1>
            <div className="character-details-container">
                <img
                    src={character.image ? character.image : hogwart}
                    className="character-image"
                    alt={character.name}
                />
                <div className="character-details">
                    <p>{`Date of birth: ${character.dateOfBirth ? character.dateOfBirth : "No information"}`}</p>
                    <p>{`Ancestry: ${character.ancestry ? character.ancestry : "No information"}`}</p>
                    <p>{`Gender: ${character.gender ? character.gender : "No information"}`}</p>
                    <p>{`Hair colour: ${character.hairColour ? character.hairColour : "No information"}`}</p>
                    <p>{`Eye colour: ${character.eyeColour ? character.eyeColour : "No information"}`}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
