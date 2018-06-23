import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

export class Level3_orders_route extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {

        } = this.props;
        return (
            <div>Orders</div>
        );
    }
}

function mapStateToProps({level3}) {
    return {level3};
}

export default connect(mapStateToProps, {})(Level3_orders_route);

Level3_orders_route.propTypes = {

};
