import React from 'react';
import {pure} from "recompose";
import {Style} from "./style";


const Level9 = pure(({

}) => {
    return <Style>
        <div>
            <div className='title'>FRONT-END SKILL TREE</div>
            <div className='subtitle'><span>CURRENT RANK</span></div>
            <div className='current-level'><span>FRONT-END NOOB</span></div>
            <div className='level-ship'>
                <div>
                    <img src="/images/level9/img-ship-noob.png" alt=""/>
                </div>
            </div>
            <div className='level-desc'>
                <svg viewBox="0 0 300 180">
                    <path d="M142.8,5.2l-22.5,8.3-4.7,1.7,4.6,2,12.3,5.3-17.1,9.9L109,36.2H297.2V178H2.8V36.2H60.4l.4-.2,33-13.6,3-1.3L94.4,19l-5.9-5.2,54.3-8.6M162.5,0,83.9,12.5l9.1,8L60,34.2H.8V180H299.2V34.2H116.4l20.5-12-16-6.8L162.5,0Z"></path>
                </svg>
                <div className='desc-text'>
                    Welcome to aboard.
                    Your mission is: Collect the resources and learn the skills to upgrade the ship.
                    Good luck, captain!
                </div>
            </div>
        </div>
        <div className='skill-progress'>
            <div className='progress-wrap'>
                <div className='progress-icon'><img src="/images/level9/img-planet-basics.png" alt=""/></div>
                <div className='progress-list'>
                    <ul className='list'>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    category
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/3</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    build
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/4</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='progress-wrap css-progress'>
                <div className='progress-icon'><img src="/images/level9/img-planet-css.png" alt=""/></div>
                <div className='progress-list'>
                    <ul className='list'>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    flip_to_front
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/3</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    view_quilt
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/4</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    developer_board
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/4</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    developer_board
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/4</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    devices
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/4</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    widgets
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/4</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='progress-wrap javascript-progress'>
                <div className='progress-icon'><img src="/images/level9/img-planet-js.png" alt=""/></div>
                <div className='progress-list'>
                    <ul className='list'>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    hdr_strong
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/3</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    gradient
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/4</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                    </ul>
                    <ul className='list'>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    format_quote
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/4</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    developer_mode
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/4</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                        <li>
                            <div className='skill-icon'>
                                <i className="material-icons">
                                    nfc
                                </i>
                            </div>
                            <div className='recommended'>
                                <i className="material-icons">
                                    settings
                                </i>
                                <span>0/4</span>
                            </div>
                            <div className='optional'>
                                <i className="material-icons">
                                    filter_tilt_shift
                                </i>
                                <span>0/0</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div></div>
    </Style>
});

export default Level9;

Level9.propTypes = {

};
