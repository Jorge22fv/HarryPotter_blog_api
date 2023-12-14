import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Slytherin from "./component/houses/slytherin.jsx"
import Hufflepuff from "./component/houses/hufflepuff.jsx";
import Gryffindor from "./component/houses/gryffindor.jsx";
import Ravenclaw from "./component/houses/ravenclaw.jsx";
import Profile from "./views/profile.jsx";

const Layout = () => {

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
						<Route exact path="/profile/:house/:characterName">

							<Profile />
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
