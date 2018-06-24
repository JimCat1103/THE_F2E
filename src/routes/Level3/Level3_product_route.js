import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

export class Level3_product_route extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {

        } = this.props;
        return (
            <div>Product</div>
        );
    }
}

function mapStateToProps({level3}) {
    return {level3};
}

export default connect(mapStateToProps, {})(Level3_product_route);

Level3_product_route.propTypes = {

};
