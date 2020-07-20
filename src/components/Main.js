import React, {Component} from "react";

class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            decode: false,
            byteMode: 2,
            original: "",
            modified: ""
        }
    }
}

export default Main;