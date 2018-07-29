import React, {Component} from "react";
import {connect} from "react-redux";
import Level8 from '../../components/Level8/Level8';
import '../../styles_recover/level8.css';

export class Level8_route extends Component {
    render() {

        return <Level8/>
    }
}

function mapStateToProps({}) {
    return {};
}

export default connect(mapStateToProps)(Level8_route);

Level8_route.propTypes = {

};
