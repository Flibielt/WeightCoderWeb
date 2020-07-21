import React, {Component} from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react/lib/bootstrap-switch-button-react";

import { codeText, decodeText } from "../util/Coder"

class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            code: true,
            mode: "Code",
            byteMode: 2,
            original: "",
            modified: " "
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleModeChange = this.handleModeChange.bind(this);
        this.handleByteChange = this.handleByteChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleCodeText = this.handleCodeText.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleModeChange(isCode) {
        this.setState({code: isCode});
        if (isCode) {
            this.setState({mode: "Code"});
        } else {
            this.setState({mode: "Decode"});
        }
    }

    handleByteChange(is2Byte) {
        if (is2Byte) {
            this.setState({byteMode: 2});
        } else {
            this.setState({byteMode: 1});
        }
    }

    handleClear() {
        this.setState({
            original: ""
        })
    }

    handleCodeText() {
        const twoByteMode = this.state.byteMode === 2;
        let modifiedText;

        if (this.state.code) {
            modifiedText = codeText(this.state.original, twoByteMode);
        } else {
            modifiedText = decodeText(this.state.original, twoByteMode);
        }

        this.setState({modified: modifiedText});
    }

    render() {
        return (
            <div>
                <div className="form-group mr-4 ml-4 mb-4">
                    <textarea className="form-control text-justify" rows={5}  id="original"
                              value={this.state.original}
                              name="original"
                              onChange={this.handleInputChange}/>
                </div>
                <div className="container-fluid ml-0 mr-0">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 pl-2 pr-2 text-center">
                            <button type="button" className="btn btn-primary w-50"
                            onClick={this.handleCodeText}
                            >{this.state.mode}</button>
                        </div>
                        <div className="col-md-3 col-sm-6 pl-2 pr-2 text-center">
                            <button type="button" className="btn btn-primary w-50"
                            onClick={this.handleClear}
                            >Clear</button>
                        </div>
                        <div className="col-md-3 col-sm-6 pl-2 pr-2 text-center">
                            <BootstrapSwitchButton
                                checked={this.state.code}
                                onstyle="primary w-50" offstyle="primary w-50" onlabel="Code" offlabel="Decode"
                                name="checked"
                                onChange={(checked => {this.handleModeChange(checked)})}
                            />
                        </div>
                        <div className="col-md-3 col-sm-6 pl-2 pr-2 text-center">
                            <BootstrapSwitchButton
                                checked={this.state.byteMode === 2}
                                onstyle="primary w-50" offstyle="primary w-50" onlabel="2 byte" offlabel="1 byte"
                                onChange={checked => {this.handleByteChange(checked)}}
                            />
                        </div>
                    </div>
                </div>

                <div className="mr-4 ml-4 mt-4 p-2 text-justify border rounded">
                    {this.state.modified}
                </div>
            </div>
        )
    }
}

export default Main;