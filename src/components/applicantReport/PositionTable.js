import React, { Component } from 'react'
import Data from '../../data.json'
import PropTypes from 'prop-types'
import Applicants from './Applicants.js';

class PositionTable extends Component{
    state = {
        positionName: "",
    }

    componentDidMount(){
        const {job_id} = this.props
        const jobName = Data.jobs.filter(job => job.id === job_id)[0].name
        this.setState({
            ...this.state, 
            positionName: jobName
        })
    }

    render(){
        const {applicants} = this.props
        const {positionName} = this.state

        let firstIteration = true;
        let applicantContent = [];

        //
        const positionHeight = applicants.reduce((accumulator, applicant) => {
            const skills = Data.skills.filter(skill => skill.applicant_id === applicant.id)
            return accumulator + skills.length
        }, 0)

        applicants.forEach(applicant => {
            const skills = Data.skills.filter(skill => skill.applicant_id === applicant.id)
            const skillLength = skills.length 
            const firstSkill = skills.shift()
            const skillList = skills.map(skill => {return(<tr key={skill.id + positionHeight}><td>{skill.name}</td></tr>)})

            if (firstIteration){
                firstIteration = false
                applicantContent.push(
                    <Applicants 
                        key={applicant.id} 
                        info={applicant} 
                        first={true} 
                        firstSkill={firstSkill} 
                        posHeight={positionHeight} 
                        rowHeight={skillLength} 
                        posName={positionName} 
                    />)
            } else {
                applicantContent.push(
                    <Applicants 
                        key={applicant.id} 
                        info={applicant} 
                        first={false} 
                        firstSkill={firstSkill} 
                        posHeight={positionHeight} 
                        rowHeight={skillLength} 
                    />)
            }
            skillList.forEach(skillName => applicantContent.push(skillName))
        });

        return(
            <tbody>
                {applicantContent}
            </tbody>

        )
    }
}

PositionTable.propTypes = {
    applicants: PropTypes.array.isRequired,
    job_id: PropTypes.number.isRequired
}

export default PositionTable
