import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Level6 from "../../components/Level6/Level6";

export class Level6_route extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        const {level6 = {}} = this.props;
        const {

        } = level6;

        return <Level6

        />
    }
}

function mapStateToProps({level6}) {
    return {level6};
}

export default connect(mapStateToProps, {})(Level6_route);

Level6_route.propTypes = {
    level5: PropTypes.object,
    onStarRateClick: PropTypes.func,
    fetchComics: PropTypes.func,
};
