import React, {Component} from 'react';
import PropTypes from "prop-types";
import {slide as Menu} from 'react-burger-menu';
import {Style} from './style';
import {Link} from "react-router-dom";

const HOME = 'home';
const ORDERS = 'orders';
const PRODUCT = 'product';

class Header extends Component {
    render() {
        const {is_active = 'home', onMenuChange=()=>{}} = this.props;
        return <Style>
            <div className='header-mobile'>
                <Menu right>
                    <Link onClick={() => onMenuChange(HOME)} to={`/level3`} id={HOME} className="menu-item">{HOME}</Link>
                    <Link onClick={() => onMenuChange(ORDERS)} to={`/level3/${ORDERS}`} id={ORDERS} className="menu-item">{ORDERS}</Link>
                    <Link onClick={() => onMenuChange(PRODUCT)} to={`/level3/${PRODUCT}`} id={PRODUCT} className="menu-item">{PRODUCT}</Link>

                    <div className='user-mobile'>admin</div>
                </Menu>
            </div>

            <div className='header'>
                <div className='logo'>Shoptime</div>
                <div className='menu'>
                    <Link onClick={() => onMenuChange(HOME)} to={`/level3`} id={HOME} className={`menu-item ${(is_active === HOME) ? 'active' : ''}`}>{HOME}</Link>
                    <Link onClick={() => onMenuChange(ORDERS)} to={`/level3/${ORDERS}`} id={ORDERS} className={`menu-item ${(is_active === ORDERS) ? 'active' : ''}`}>{ORDERS}</Link>
                    <Link onClick={() => onMenuChange(PRODUCT)} to={`/level3/${PRODUCT}`} id={PRODUCT} className={`menu-item ${(is_active === PRODUCT) ? 'active' : ''}`}>{PRODUCT}</Link>
                </div>
                <div className='user'>admin</div>
            </div>
        </Style>
    }
}

export default Header;

Header.propTypes = {};