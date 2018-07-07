import React from 'react';
import PropTypes from "prop-types";
import {pure} from "recompose";
import {Style} from "./style";
import Header from "../Header/Header";
import {ADVERTISING_1} from "../const";
import Advertising from "../Advertising/Advertising";
import ComicOpiton from "../ComicOption/ComicOption";

const ComicOne = pure(({
    header_title='',
    comic_data=[],
    is_bright=true
}) => {
    console.log(comic_data);
    return <Style>
        <Header is_bright={is_bright} title={header_title}/>
        <ComicOpiton/>
        <Advertising image={ADVERTISING_1}/>

    </Style>
});

export default ComicOne;

ComicOne.propTypes = {
    comic_data: PropTypes.array
};
