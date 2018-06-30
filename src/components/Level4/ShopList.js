import _ from 'lodash';
import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {compose, withHandlers, pure, withState} from "recompose";
import {Style} from "./style";

const enhance = compose(
    withState('currentPage', 'updateCurrentPage', 1),
    withState('todosPerPage', 'updateTodosPerPage', 7),
    withHandlers({
        handleClick: ({updateCurrentPage}) => (value) => {
            updateCurrentPage(Number(value));
        },
    })
);

const BaseComponent = pure(({level4={}, currentPage=1, todosPerPage=7, handleClick=()=>{}}) => {
    const {shop_title, shop_subtitle, shop_data} = level4;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentShopDatas = (!_.isEmpty(shop_data)) && shop_data.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(shop_data.length / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    return  <Style>
        <div className='product-list-title'>
            <div>{shop_title}</div>
            <div>{shop_subtitle}</div>
        </div>
        {
            (shop_data.length > 7) && <div className='pagination'>
                <ul>
                    {
                        pageNumbers.map(number => {
                            return <li
                                key={number}
                                id={number}
                                onClick={() => handleClick(number)}
                            >
                                {number}
                            </li>
                        })
                    }
                </ul>
            </div>
        }
        <div className="product-list">
            {
                currentShopDatas.map((item, index) => {
                    const {number = '', position = 1, title = '', subtitle = '', is_green_border, is_green_fill, is_green_pattern, image} = item;

                    return <div key={`product-list-item_${index}`} className={`item-${position}`}>
                        <div className='number'>{number}</div>
                        <div className='title' text={title}>{title}</div>
                        <div className='subtitle'>{subtitle}</div>
                        {is_green_border && <div className='green-border'></div>}
                        {is_green_pattern && <div className='green-pattern'></div>}
                        {is_green_fill && <div className='green-border-fill'></div>}
                        {!_.isEmpty(image) ?
                            <Link to={`/level4/${number}`} className='image' style={{backgroundImage: `url(${image})`}}></Link> :
                            <Link to={`/level4/${number}`} className='image' style={{backgroundImage: "url('/images/125x125.png')"}}></Link>
                        }
                    </div>
                })
            }
        </div>
    </Style>
});

export default enhance(BaseComponent);

BaseComponent.propTypes = {
    level4: PropTypes.object,
    currentPage: PropTypes.number,
    todosPerPage: PropTypes.number,
    handleClick: PropTypes.func
};
