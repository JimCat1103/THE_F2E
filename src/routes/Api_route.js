import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchTheF2eApi} from '../actions'

export class Api_route extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const {fetchTheF2eApi = () => {}} = this.props;
        fetchTheF2eApi();
    }
    render() {
        const {theF2e} = this.props;
        const {certificate} = theF2e;
        if(certificate) {
           return window.location.href = certificate;
        }
        else {
            return <div>臨時先把證書拿取寫在這，順便練習怎麼串接API(use axios)</div>
        }
    }
}

function mapStateToProps({theF2e}) {
    return {theF2e};
}

export default connect(mapStateToProps, {fetchTheF2eApi})(Api_route);

Api_route.propTypes = {

};
