import React from 'react';

function Card(props) {
    
    return (
        <div className={props.featured ? "card-wrapper card-featured" : "card-wrapper"}>
            <img src={`./images/${props.image}`} alt="Company Logo" className="company-logo" />
            <div className="info-container">
                <div className="job-details-container">
                    <div className="company-info row-direction">
                        <p>{props.companyName}</p>
                        {props.new ? (
                            <button className="btn-new-job">NEW!</button>
                        ) : null}
                        {props.featured ? (
                            <button className="btn-featured-job">FEATURED</button>
                        ) : null}
                    </div>
                    <h1 className="job-position">{props.jobPosition}</h1>
                    <div className="job-info row-direction">
                        <p>{props.posted}d ago</p>
                        <p>{props.jobType}</p>
                        <p>{props.jobLocation}</p>
                    </div>
                </div>
                <div className="tags-container">
                    {props.tags.map((element, index) => (
                        <button key={index}>{element}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card
