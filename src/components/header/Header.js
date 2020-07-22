import React, {Component} from "react";
import {Navbar} from "react-bootstrap";

import logo from "../../img/illuminati.svg";
import redLogo from "../../img/illuminati2.svg";

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            image: logo
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
        this.setState({image: redLogo});
    }

    handleMouseOut() {
        this.setState({image: logo});
    }

    render() {
        return (
            <Navbar className="navbar navbar-fixed-top bg-info" variant="dark">
                <div className="col-1">
                    <img src={this.state.image}
                         alt="The truth is way heavier" title="The truth is way heavier"
                         className="img-responsive w-75"
                         onMouseOver={this.handleMouseOver}
                         onMouseOut={this.handleMouseOut}
                    />
                </div>
                <div className="col-11 text-left align-content-md-center text-xl-left">Weight coder</div>
            </Navbar>
        )
    }
}

export default Header;