import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";
import {fetchComic} from '../../actions';
import ComicOne from "../../components/Level5/ComicOne/ComicOne";

export class ComicOneRoute extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {match: {params: {id}}, fetchComic = () => {}} = this.props;
        fetchComic(id);
    }

    render() {
        const {level5 = {}} = this.props;
        const {
            comic_data,
            header_title
        } = level5;
        if(!_.isEmpty(comic_data)) {
            return <ComicOne
                header_title={header_title}
                comic_data={comic_data}
            />
        }
        else {
            return <div>找不到該筆資料</div>
        }
    }
}

function mapStateToProps({level5}) {
    return {level5};
}

export default connect(mapStateToProps, {fetchComic})(ComicOneRoute);

ComicOneRoute.propTypes = {
    level5: PropTypes.object,
    fetchComic: PropTypes.func
};
