import React, { Component } from "react";
import Header from './header/Header'

class Layout extends Component{
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="mt-3 mb-3 mr-5 ml-5">
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;