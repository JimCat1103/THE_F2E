import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchShopData} from '../../actions';
import _ from "lodash";
import ShopOne from "../../components/Level4/ShopOne/ShopOne";

export class ShopOneRoute extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {match: {params: {id}}, fetchShopData=()=>{}} = this.props;
        fetchShopData(id)
    }

    render() {
        const {shop_data = []} = this.props;
        if(!_.isEmpty(shop_data)) {
            return <ShopOne shop_data={shop_data} />
        }
        else {
            return <div>資料讀取中</div>
        }
    }
}

function mapStateToProps({level4: {shop_data}}) {
    return {shop_data};
}

export default connect(mapStateToProps, {fetchShopData})(ShopOneRoute);

ShopOneRoute.propTypes = {
    shop_data: PropTypes.array
};
