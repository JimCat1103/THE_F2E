import _ from 'lodash';
import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {pure} from "recompose";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';
import {Style} from "./style";

const ShopOen = pure(({shop_data=[]}) => {
    const {title = '', number = '', image = '/images/125x125.png', content_data = {}} = shop_data[0];
    const {label = '', content_title = [], content_subtitle = '', content = [], content_image = ''} = content_data;
    return  <Style>
        <Link className='back-btn' to='/level4/'>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>CCCLOTHES</span>
        </Link>
        <div className="title-green-fill"></div>
        <div className='image' style={{backgroundImage: `url(${image})`}}></div>
        <div className='title-1'>{content_title[0]}</div>
        {(!_.isEmpty(content_title[1])) && <div className='title-2'>{content_title[1]}</div>}
        <div className='number'>{number}</div>
        <div className='label'>{label}</div>
        <div className='green-border'></div>
        <div className='title-detail'>PRODUCT DETAILS</div>
        <div className='content'>
            <div className='title'>{title}</div>
            <div className='subtitle'>{content_subtitle}</div>
            <div className='text'>
                <div>{content[0]}</div>
                <div>{content[1]}</div>
            </div>
        </div>
        <div className='content-green-border'></div>
        <div className='content-green-fill'></div>
        <div className='content-image-1' style={{backgroundImage: `url(${content_image[0]})`}}></div>
        <div className='content-image-2' style={{backgroundImage: `url(${content_image[1]})`}}></div>
        <div className='green-pattern'></div>
    </Style>
});

export default ShopOen;

ShopOen.propTypes = {
    shop_data: PropTypes.array
};
