import React from 'react';
import _ from 'lodash';
import PropTypes from "prop-types";
import {pure} from "recompose";
import {Style} from "./style";

export function renderComics(comic_data) {
    return comic_data.map((v, index) => {
        const {id, name, is_new_chapter} = v;
        return (
          <div className='each-chapter' key={`each-chapter-${index}`}>
              <div>{`Chapter${id}：`}</div>
              <div>{name}</div>
              {is_new_chapter && <div className='new-chapter'>NEW</div>}
          </div>
        );
    })
}

const Chapters = pure(({comic_data = []}) => {
    return <Style>
        <div className='title'>All Chapters</div>
        <div className='chapter-content-wrap'>
            {_.isEmpty(comic_data) ? <div>沒有章節</div>
                : renderComics(comic_data)}
        </div>
    </Style>
});

export default Chapters;

Chapters.propTypes = {
    comic_data: PropTypes.array
};
