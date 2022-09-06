import React from "react";
import "../../styles/home.css";
import {CharacterList} from "../component/characterList"

export const Home = () => (
	<div className="text-center mt-2 home" >
		<h2 className="text-center m-4">House Slytherin</h2>
		<div style={{ display: "flex", minWidth: "auto", textAlign: "start" }}
        className="overflow-scroll">
		<CharacterList/>
		</div>
	</div>
);
