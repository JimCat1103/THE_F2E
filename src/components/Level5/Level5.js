import React from 'react';
import PropTypes from "prop-types";
import {pure} from "recompose";
import {Style} from "./style";
import Header from "./Header/Header";
import ComicInfo from "./ComicInfo/ComicInfo";

const Level5 = pure(({
    is_bright=true,
    coverImage = '',
    title = '',
    genres = '',
    author = '',
    status = '',
    rate = [],
    summary = [],
    onStarRateClick = () => {}
}) => {
    return  <Style>
            <Header is_bright={is_bright}/>
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
    </Style>
});

export default Level5;

Level5.propTypes = {
    is_bright: PropTypes.bool,
    coverImage: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string,
    rate: PropTypes.array,
    summary: PropTypes.array,
    onStarRateClick: PropTypes.func
};
