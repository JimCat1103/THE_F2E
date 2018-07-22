import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Level7 from '../../components/Level7/Level7';

export class Level7_route extends Component {
    render() {
        const {level7 = {}} = this.props;

        return <Level7/>
    }
}

function mapStateToProps({level7}) {
    return {level7};
}

export default connect(mapStateToProps)(Level7_route);

Level7_route.propTypes = {
    level7: PropTypes.object
};
