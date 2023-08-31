import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Slytherin from "./component/houses/slytherin"
import Hufflepuff from "./component/houses/hufflepuff";
import Gryffindor from "./component/houses/gryffindor";
import Ravenclaw from "./component/houses/ravenclaw";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/slytherin">
							<Slytherin />
						</Route>
						<Route exact path="/ravenclaw">
							<Ravenclaw />
						</Route>
						<Route exact path="/gryffindor">
							<Gryffindor />
						</Route>
						<Route exact path="/hufflepuff">
							<Hufflepuff />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
