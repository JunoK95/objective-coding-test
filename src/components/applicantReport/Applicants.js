import React from 'react'

function Applicants(props){
    const{info, rowHeight, first, posName} = props

    if (first){
        return(
            <tr>
                <td rowSpan={`${props.posHeight}`} className="job-name">{posName}</td>
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
                {props.firstSkill.name}                       
            </td>
            <td rowSpan={`${rowHeight}`}>
                {info.cover_letter}
            </td>  
        </tr>
    )
}

export default Applicants