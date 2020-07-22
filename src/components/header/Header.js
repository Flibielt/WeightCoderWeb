import React, {Component} from "react";
import {Navbar} from "react-bootstrap";

import logo from "../../img/illuminati.svg";
import redLogo from "../../img/illuminati2.svg";

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            image: logo,
            logoSize: "w-75"
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.updateLogoSize = this.updateLogoSize.bind(this);
    }

    componentDidMount() {
        this.updateLogoSize();
        window.addEventListener('resize', this.updateLogoSize)
    }

    handleMouseOver() {
        this.setState({image: redLogo});
    }

    handleMouseOut() {
        this.setState({image: logo});
    }

    updateLogoSize() {
        if (window.innerWidth >= 768) {
            this.setState({logoSize: "w-75"});
        } else {
            this.setState({logoSize: "w-25"});
        }
    }

    render() {
        return (
            <Navbar className="navbar navbar-fixed-top bg-info" variant="dark">
                <div className="col-md-1 col-sm-2">
                    <img src={this.state.image}
                         alt="The truth is way heavier" title="The truth is way heavier"
                         className={this.state.logoSize}
                         onMouseOver={this.handleMouseOver}
                         onMouseOut={this.handleMouseOut}
                    />
                </div>
                <div className="col-md-11 col-sm-10 text-xl-left">Weight coder</div>
            </Navbar>
        )
    }
}

export default Header;