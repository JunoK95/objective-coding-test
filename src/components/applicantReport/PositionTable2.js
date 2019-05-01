import React, { Component } from 'react'
import Data from '../../data.json'
import Applicants from './Applicants.js';

class PositionTable2 extends Component{
    state = {
        positionName: "",
    }

    componentDidMount(){
        const {applicants} = this.props
        const jobName = Data.jobs.filter(job => job.id === this.props.job_id)[0].name
        this.setState({
            ...this.state, 
            rowHeight: applicants.length, 
            positionName: jobName
        })
    }

    render(){
        const {applicants} = this.props
        const {positionName} = this.state

        let firstIteration = true;

        let applicantContent = [];

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

export default PositionTable2
