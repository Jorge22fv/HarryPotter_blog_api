import React from "react";
import "../../styles/home.css";
import gryffindor from "../../img/gryffindor.png"
import hufflepuff from "../../img/hufflepuff.png"
import ravenclaw from "../../img/ravenclaw.png"
import slytherin from "../../img/slytherin.png"


export const Home = () => (
	<div className="bg-dark">
		<p className="welcome-message">Bienvenidos a la Escuela Hogwarts de Magia y Hechicería!</p>
		<div className="image-card">
			<div className="card col-md-8 house-card gryffindor">
				<img src={gryffindor} className="card-img-top" alt="Gryffindor" />
			</div>

			<div className="card col-md-8 house-card ravenclaw">
				<img src={ravenclaw} className="card-img-top" alt="Ravenclaw" />
			</div>

			<div className="card col-md-8 house-card hufflepuff">
				<img src={hufflepuff} className="card-img-top" alt="Hufflepuff" />
			</div>

			<div className="card col-md-8 house-card slytherin">
				<img src={slytherin} className="card-img-top" alt="Slytherin" />
			</div>
		</div>
	</div>
);
