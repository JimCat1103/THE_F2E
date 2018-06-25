import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Level4 from "../components/Level4/Level4";

export class Level4_route extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
        } = this.props;
        return (
            <Level4

            />
        );
    }
}

function mapStateToProps({level4}) {
    return {level4};
}

export default connect(mapStateToProps)(Level4_route);

Level4_route.propTypes = {

};
