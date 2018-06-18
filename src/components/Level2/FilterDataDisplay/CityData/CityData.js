import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';
import faCalendarAlt from '@fortawesome/fontawesome-free-solid/faCalendarAlt';
import {Style} from "./style";
import {cityData} from '../../cityData';

const CityData = pure(()=>{
    return <Style>
        {cityData.map((data, index)=>{
            const {Picture1, Name, Description, Add, Zone, Ticketinfo, Opentime} = data;
            return <li className="content-item" key={`cityData_${index}`}>
                <a href="#">
                    <div className="content-img imgbox">
                        <div className="imgbox-inner">
                            <img src={Picture1} alt="img" className="img"/>
                        </div>
                    </div>
                </a>
                <div className="content-info">
                    <a href="#"><h2 className="subtitle">{Name}</h2>
                        <p className="content-des">{Description}</p>
                        <div className="content-ticket">
                            <h3>{Add}</h3>
                            {/*<div className="content-tag">All</div>*/}
                        </div>
                        <div className='other-info'>
                            <div>
                                <div className='location'>
                                    <div><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                                    <div>{Zone}</div>
                                </div>
                                <div className='ticket-info'><span>$</span><span>{Ticketinfo}</span></div>
                            </div>
                            <div>
                                <div><FontAwesomeIcon icon={faCalendarAlt} /></div>
                                <div>{Opentime}</div>
                            </div>
                        </div>
                    </a>
                </div>
            </li>
        })}

        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    </Style>
});

export default CityData;

CityData.propTypes = {

};
