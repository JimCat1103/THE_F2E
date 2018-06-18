import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import {Style} from "./style";


const Header = pure(()=>{
    return <Style>
        <div className='logo'>
            <div>HaveFun</div>
        </div>
        <div className='search-bar'>
            <div>
                <div className='search-input'>
                    <label htmlFor="funSearch"><FontAwesomeIcon icon={faSearch} className='search-icon'/></label>
                    <input type="text" id='funSearch' placeholder='Explore your own activities'/>
                </div>
            </div>
        </div>
    </Style>
});

export default Header;

Header.propTypes = {

};
