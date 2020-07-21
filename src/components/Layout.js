import React, { Component } from "react";
import Header from './header/Header'

class Layout extends Component{
    render() {
        return (
            <React.Fragment>
                <Header className="mr-1 ml-1"/>
                <main className="mt-3 mb-3 pr-1 pl-1">
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;