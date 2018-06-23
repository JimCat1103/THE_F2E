import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import {onMenuChange} from '../actions';
import Header from "../components/Level3/Header/Header";

class MainLayout extends Component {
    render() {
        const Style = styled.div`

		`;
        const {path} = this.props.match;
        const {L3_header, onMenuChange=()=>{}} = this.props;
        const {is_active} = L3_header;
        return (
            <Style>
                {(path.indexOf('/level3') !== -1) && <Header is_active={is_active} onMenuChange={onMenuChange}/>}
                <this.props.component {...this.props} />
            </Style>
        );
    }
}

function mapStateToProps({L3_header}) {
    return {L3_header};
}

export default connect(mapStateToProps, {onMenuChange})(MainLayout);