import React from "react";
import { useHistory } from "react-router-dom";

import "../../styles/home.css";
import gryffindor from "../../img/gryffindor.png"
import hufflepuff from "../../img/hufflepuff.png"
import ravenclaw from "../../img/ravenclaw.png"
import slytherin from "../../img/slytherin.png"


export const Home = () => {

	const history = useHistory();

	const handleCardClick = (path) => {
		history.push(path);
	};

	return (
		<div className="bg-dark">
			<p className="welcome-message">Bienvenidos a la Escuela Hogwarts de Magia y Hechicería!</p>
			<div className="image-card">
				<div className="card col-md-8 house-card1 gryffindor">
					<img src={gryffindor} className="card-img-top" alt="Gryffindor"
						onClick={() => handleCardClick('/gryffindor')}
					/>
				</div>

				<div className="card col-md-8 house-card1 ravenclaw">
					<img src={ravenclaw} className="card-img-top" alt="Ravenclaw"
						onClick={() => handleCardClick('/ravenclaw')}
					/>
				</div>

				<div className="card col-md-8 house-card1 hufflepuff">
					<img src={hufflepuff} className="card-img-top" alt="Hufflepuff"
						onClick={() => handleCardClick('/hufflepuff')}
					/>
				</div>

				<div className="card col-md-8 house-card1 slytherin">
					<img src={slytherin} className="card-img-top" alt="Slytherin"
						onClick={() => handleCardClick('/slytherin')}
					/>
				</div>
			</div>
		</div>
	);
};
