import React, {Component} from 'react';
import styled from 'styled-components';

export default class MainLayout extends Component {
    render() {
        const Style = styled.div`

		`;
        return (
            <Style>
                <this.props.component {...this.props} />
            </Style>
        );
    }
}
