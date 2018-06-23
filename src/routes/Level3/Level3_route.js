import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Level3 from "../../components/Level3/Level3";

export class Level3_route extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {

        } = this.props;
        return (
            <Level3

            />
        );
    }
}

function mapStateToProps({level3}) {
    return {level3};
}

export default connect(mapStateToProps, {})(Level3_route);

Level3_route.propTypes = {

};
