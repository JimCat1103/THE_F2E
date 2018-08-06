import React, {Component} from "react";
import {connect} from "react-redux";
import Level9 from '../../components/Level9/Level9';

export class Level9_route extends Component {
    render() {
        return <Level9/>
    }
}

function mapStateToProps({}) {
    return {};
}

export default connect(mapStateToProps)(Level9_route);

Level9_route.propTypes = {

};
