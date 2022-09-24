import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-header">
                    <div className="navbar-brand" href="#">
                        <FontAwesomeIcon icon="newspaper" size="lg" />
                    </div>
                </div>

                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="home">
                                Artigos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="search">
                                Buscar
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
