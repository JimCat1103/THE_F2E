import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import {Style} from "./style";

const Level4 = pure(()=>{
    return <Style>
        <div className='product-list-title'>
            <div>CCCLOTHES</div>
            <div>MEN’S TOPS</div>
        </div>


        <div className="product-list">
            <div className='grid-item item-1'>
                <div className='green-border'></div>
                <div className='content'></div>
                <div className='title' text="LINEN BLAZER">LINEN BLAZER</div>
                <div className='number'>01</div>
                <div className='green-pattern'></div>
                <div className='subtitle'>Men’s outfit</div>
            </div>
            <div className='grid-item item-2'>
                <div className='green-border'></div>
                <div className='number'>02</div>
                <div className='green-border-fill'></div>
                <div className='subtitle'>Men’s basics</div>
                <div className='content'></div>
                <div className='title' text="FREELIFT">FREELIFT</div>
            </div>
            <div className='grid-item item-3'>
                <div className='green-border-fill'></div>
                <div className='title' text="SUPER SKINNY">SUPER SKINNY</div>
                <div className='green-border'></div>
                <div className='content'></div>
                <div className='subtitle'>Men’s pattern shirts</div>
                <div className='number'>03</div>
            </div>
            <div className='grid-item item-4'>
                <div className='green-border'></div>
                <div className='subtitle'>Men’s cadual</div>
                <div className='title' text="DENIM">DENIM</div>
                <div className='content'></div>
                <div className='number'>04</div>
                <div className='green-pattern'></div>
            </div>
            <div className='grid-item item-5'>
                <div className='green-pattern'></div>
                <div className='content'></div>
                <div className='subtitle'>Men’s jacket</div>
                <div className='title' text="SWEATSHIRTS">SWEATSHIRTS</div>
                <div className='green-border'></div>
                <div className='number'>05</div>
            </div>
            <div className='grid-item item-6'>
                <div className='title' text="VINTAGE DENIM">VINTAGE DENIM</div>
                <div className='content'></div>
                <div className='number'>06</div>
                <div className='green-border-fill'></div>
                <div className='green-border'></div>
                <div className='subtitle'>Men’s classic</div>
            </div>
            <div className='grid-item item-7'>
                <div className='green-border'></div>
                <div className='subtitle'>Men’s shirts</div>
                <div className='content'></div>
                <div className='title' text="EDITION">EDITION</div>
                <div className='green-border-fill'></div>
                <div className='number'>07</div>
            </div>
        </div>

    </Style>
});

export default Level4;

Level4.propTypes = {

};
