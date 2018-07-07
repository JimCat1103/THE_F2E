import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Level5 from "../../components/Level5/Level5";
import {fetchComics, onStarRateClick} from '../../actions'

export class ShopListRoute extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {fetchComics = () => {}} = this.props;
        fetchComics();
    }

    render() {
        const {level5 = {}, onStarRateClick=()=>{}} = this.props;
        const {
            header_title,
            is_bright,
            coverImage,
            title,
            genres,
            author,
            status,
            rate,
            summary,
            comic_data
        } = level5;

        return <Level5
            header_title={header_title}
            is_bright={is_bright}
            coverImage={coverImage}
            title={title}
            genres={genres}
            author={author}
            status={status}
            rate={rate}
            summary={summary}
            onStarRateClick={onStarRateClick}
            comic_data={comic_data}
        />
    }
}

function mapStateToProps({level5}) {
    return {level5};
}

export default connect(mapStateToProps, {onStarRateClick, fetchComics})(ShopListRoute);

ShopListRoute.propTypes = {
    level5: PropTypes.object,
    onStarRateClick: PropTypes.func,
    fetchComics: PropTypes.func,
};
