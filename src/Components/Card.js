import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilterTag } from '../Features/filterSlice';

function Card() {
    const jobs = useSelector(state => state.filters.jobs);
    const dispatch = useDispatch();

    const addNewFilterTag = (el) => {
        dispatch(addFilterTag({tag: el}));
    };
    


    return (
        jobs.map((element, index) => (
            <div className={element.featured ? "card-wrapper card-featured" : "card-wrapper"} key={index}>
                <img src={`./images/${element.image}`} alt="Company Logo" className="company-logo" />
                <div className="info-container">
                    <div className="job-details-container">
                        <div className="company-info row-direction">
                            <p>{element.companyName}</p>
                            {element.new ? (
                                <button className="btn-new-job">NEW!</button>
                            ) : null}
                            {element.featured ? (
                                <button className="btn-featured-job">FEATURED</button>
                            ) : null}
                        </div>
                        <h1 className="job-position">{element.jobPosition}</h1>
                        <div className="job-info row-direction">
                            <p>{element.posted} ago</p>
                            <p>{element.jobType}</p>
                            <p>{element.jobLocation}</p>
                        </div>
                    </div>
                    <div className="tags-container">
                        {element.tags.map((element, index) => (
                            <button key={index} onClick={() => addNewFilterTag(element)}>{element}</button>
                        ))}
                    </div>
                </div>
            </div>
        ))
    )
}

export default Card;