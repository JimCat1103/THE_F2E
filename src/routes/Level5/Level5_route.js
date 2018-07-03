import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Level5 from "../../components/Level5/Level5";

export class ShopListRoute extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        const {level5 = {}} = this.props;
        return <Level5 level5={level5} />
    }
}

function mapStateToProps({level5}) {
    return {level5};
}

export default connect(mapStateToProps, {})(ShopListRoute);

ShopListRoute.propTypes = {
    level5: PropTypes.object
};
