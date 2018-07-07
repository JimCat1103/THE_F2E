import React from 'react';
import {pure} from 'recompose';
import PropTypes from 'prop-types';
import {Style} from "./style";

const ComicInfo = pure(({
    coverImage = '',
    title = '',
    genres = '',
    author = '',
    status = '',
    rate = [],
    summary = [],
    onStarRateClick = () => {}
}) => {
    return <Style>
        <div className='image'><img src={coverImage} alt=""/></div>
        <div className='content'>
            <div className='title'>{title}</div>
            <div className='info-wrap'>
                <div className='each-info-title'>
                    <div>Genres</div>
                    <div>Author</div>
                    <div>Status</div>
                    <div id='title-rate'>Rate</div>
                </div>
                <div className='each-info-txt'>
                    <div>{genres}</div>
                    <div>{author}</div>
                    <div>{status}</div>
                    <div className='rating'>{
                        rate.map((is_star, index) => {
                            return is_star ? <span key={`rating_${index}`} onClick={() => onStarRateClick(index)}>&#9733;</span>
                                : <span key={index} onClick={() => onStarRateClick(index)}>&#9734;</span>
                        })
                    }</div>
                </div>
            </div>
            <div className='summary-wrap'>
                <div>Summary</div>
                {
                    summary.map((data, index) => {
                        return <div key={`summary_${index}`} className='summary-text'>
                            {data}
                        </div>
                    })
                }
            </div>
        </div>
    </Style>
});

export default ComicInfo;

ComicInfo.propTypes = {
    coverImage: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string,
    rate: PropTypes.array,
    summary: PropTypes.array,
    onStarRateClick: PropTypes.func
};