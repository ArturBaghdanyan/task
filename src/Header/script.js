import "./styles.scss";
import React from "react";
import Gallery from "../Main/gallery";
import Footer from "../Footer/contact";
import Text from "../Section/text";
import { Link, BrowserRouter as Router,Route,Switch } from "react-router-dom";


function Header() {

    return (
    <div>
        <Router>
            <div className="header">
                <h2>44-օրյա պատերազմի մասնակիցների համար </h2>

                <div className="header-link">
                    <Link to="/" target="_blank">
                        <button>Home</button>
                    </Link>
                    <Link to="/about" target="_blank">
                        <button>About Us</button>
                    </Link>
                    <Link to="/contact" target="_blank">
                        <button>Contact Us</button>
                    </Link>
                </div>

            </div>
            <hr />

            <Switch>
                <Route path="/about" component={Text} />
                <Route path="/contact" component={Footer} />
                <Route path="/" component={Gallery} />
            </Switch>

        </Router>

    </div>
    )
}
export default Header;