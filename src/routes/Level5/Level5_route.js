import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Level5 from "../../components/Level5/Level5";
import {onStarRateClick} from '../../actions'

export class ShopListRoute extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        const {level5 = {}, onStarRateClick=()=>{}} = this.props;
        const {
            is_bright,
            coverImage,
            title,
            genres,
            author,
            status,
            rate,
            summary
        } = level5;
        return <Level5
            is_bright={is_bright}
            coverImage={coverImage}
            title={title}
            genres={genres}
            author={author}
            status={status}
            rate={rate}
            summary={summary}
            onStarRateClick={onStarRateClick}
        />
    }
}

function mapStateToProps({level5}) {
    return {level5};
}

export default connect(mapStateToProps, {onStarRateClick})(ShopListRoute);

ShopListRoute.propTypes = {
    level5: PropTypes.object,
    onStarRateClick: PropTypes.func
};
