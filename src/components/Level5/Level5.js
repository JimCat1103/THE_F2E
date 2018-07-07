import React from 'react';
import PropTypes from "prop-types";
import {pure} from "recompose";
import {Style} from "./style";
import Header from "./Header/Header";
import ComicInfo from "./ComicInfo/ComicInfo";
import Chapters from "./Chapters/Chapters";
import Advertising from "./Advertising/Advertising";
import {ADVERTISING_1, ADVERTISING_2, ADVERTISING_3} from "./const";

const Level5 = pure(({
    header_title = '',
    is_bright = true,
    coverImage = '',
    title = '',
    genres = '',
    author = '',
    status = '',
    rate = [],
    summary = [],
    onStarRateClick = () => {},
    comic_data = []
}) => {
    return <Style>
        <Header is_bright={is_bright} title={header_title}/>
        <Advertising image={ADVERTISING_1}/>
        <ComicInfo
            coverImage={coverImage}
            title={title}
            genres={genres}
            author={author}
            status={status}
            rate={rate}
            summary={summary}
            onStarRateClick={onStarRateClick}
        />
        <Advertising image={ADVERTISING_2}/>
        <Chapters
            comic_data={comic_data}
        />
        <Advertising image={ADVERTISING_3}/>
    </Style>
});

export default Level5;

Level5.propTypes = {
    header_title: PropTypes.string,
    is_bright: PropTypes.bool,
    coverImage: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string,
    rate: PropTypes.array,
    summary: PropTypes.array,
    onStarRateClick: PropTypes.func,
    comic_data: PropTypes.array
};
