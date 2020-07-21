import React, {Component} from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react/lib/bootstrap-switch-button-react";

class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            code: true,
            mode: "Code",
            byteMode: 2,
            original: "",
            modified: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleModeChange = this.handleModeChange.bind(this);
        this.handleByteChange = this.handleByteChange.bind(this);
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

    render() {
        return (
            <div>
                <div className="form-group mr-4 ml-4 mb-4">
                    <label className="text-xl-left" htmlFor="original">Original</label>
                    <textarea className="form-control text-justify" rows={5}  id="original"
                              value={this.state.original}
                              name="original"
                              onChange={this.handleInputChange}/>
                </div>
                <div className="container-fluid ml-0 mr-0">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 pl-2 pr-2 text-center">
                            <button type="button" className="btn btn-primary w-50">{this.state.mode}</button>
                        </div>
                        <div className="col-md-3 col-sm-6 pl-2 pr-2 text-center">
                            <button type="button" className="btn btn-primary w-50">Clear</button>
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

                <div className="mr-4 ml-4 mt-4 text-justify">
                    {this.state.modified}
                </div>
            </div>
        )
    }
}

export default Main;