import React from 'react'
import PropTypes from 'prop-types'

function Applicants(props){
    const{info, rowHeight, first, posName, posHeight, firstSkill} = props

    if (first){
        return(
            <tr>
                <td rowSpan={`${posHeight}`} className="job-name">{posName}</td>
                <td rowSpan={`${rowHeight}`} className="applicant-name">
                    {info.name}
                </td>
                <td rowSpan={`${rowHeight}`}>
                    <a href={`mailto:${info.email}`}>{info.email}</a>
                </td>
                    {info.website ? <td rowSpan={`${rowHeight}`}><a href={info.website}>{info.website}</a></td> : <td rowSpan={`${rowHeight}`}>---</td>}
                <td>
                    {props.firstSkill.name}                         
                </td>
                <td rowSpan={`${rowHeight}`}>
                    {info.cover_letter}
                </td>    
            </tr>
        )
    }
    return(
        <tr>
            <td className="applicant-name" rowSpan={`${rowHeight}`}>
                {info.name}
            </td>
            <td rowSpan={`${rowHeight}`}>
                <a href={`mailto:${info.email}`}>{info.email}</a>
            </td>
                {info.website ? <td rowSpan={`${rowHeight}`}><a href={info.website}>{info.website}</a></td> : <td rowSpan={`${rowHeight}`}>---</td>}
            <td>
                {firstSkill.name}                       
            </td>
            <td rowSpan={`${rowHeight}`}>
                {info.cover_letter}
            </td>  
        </tr>
    )
}

Applicants.propTypes = {
    info: PropTypes.object.isRequired,
    firstSkill: PropTypes.object.isRequired,
    first: PropTypes.bool,
    posHeight: PropTypes.number,
    rowHeight: PropTypes.number,
    posName: PropTypes.string
}

export default Applicants