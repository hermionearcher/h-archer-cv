import React from 'react'
import PropTypes from 'prop-types';


const Card = ({job}: {job: any}) => {
    return (
        <>
            <div className="line-break"></div>
            <div className="card--work-history">
                <strong>
                    🚧 {job?.role} |{' '}
                    <a
                        href={job?.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span id="card--work--company">{job?.name}</span>
                    </a>
                </strong>
                <p>{job?.startDate} - {job?.endDate}</p>
                <p>{job?.subtitle}</p>
                <ul>
                { job?.list?.map((item: string, index: React.Key | null | undefined) => {return <li key={index}>{item}</li>})}
                {/* {job?.list?.length >4 && <ToggleList />} */}
                </ul>
            </div></>
    )
}

export default Card

Card.propTypes = {
    role: PropTypes.string,
};