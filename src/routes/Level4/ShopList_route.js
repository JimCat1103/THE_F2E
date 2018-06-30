import React, {Component} from "react";
import _ from 'lodash';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ShopList from "../../components/Level4/ShopList";
import {fetchShopDatas} from '../../actions'

export class ShopListRoute extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {fetchShopDatas=()=>{}} = this.props;
        fetchShopDatas();
    }

    render() {
        const {level4 = {}} = this.props;
        const {shop_data = []} = level4;

        if(!_.isEmpty(shop_data)) {
            return <ShopList level4={level4} />
        }
        else {
            return <div>資料讀取中</div>
        }
    }
}

function mapStateToProps({level4}) {
    return {level4};
}

export default connect(mapStateToProps, {fetchShopDatas})(ShopListRoute);

ShopListRoute.propTypes = {
    level4: PropTypes.object
};
