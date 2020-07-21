import React from "react";
import {Navbar} from "react-bootstrap";

import logo from "../../img/illuminati.svg";

const header = () => (
    <Navbar className="navbar navbar-fixed-top bg-info" variant="dark">
            <div className="col-1">
                <img src={logo} alt="Logo" className="img-responsive w-75" />
            </div>
        <div className="col-11 text-left align-content-md-center text-xl-left">Weight coder</div>
    </Navbar>
)

export default header;