import React, { Component } from 'react'
import Data from '../../data.json'
import Applicants from './Applicants.js';

class PositionTable extends Component{
    state = {
        positionName: "",
    }

    incrementHeight = (amount) => {
        this.setState({...this.state, rowHeight: this.state.rowHeight + amount})
        console.log(this.state)
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
        const {rowHeight, positionName} = this.state

        let firstIteration = true;
        const applicationRows = applicants.map(applicant => {
            const skills = Data.skills.filter(skill => skill.applicant_id === applicant.id)

            const firstSkill = skills.shift()
            const skillList = skills.map(skill => {return(<tr><td>{skill.name}</td></tr>)})

            console.log(skillList)
            if (firstIteration){
                firstIteration = false
                return (
                    <Applicants key={applicant.id} info={applicant} first={true} firstSkill={firstSkill} rowHeight={rowHeight} posName={positionName} />
                    )
            } else {
                return (<Applicants key={applicant.id} info={applicant} first={false} firstSkill={firstSkill} />)
            }
        })

        return(
            <tbody>
                {applicationRows}
            </tbody>

        )
    }
}

export default PositionTable
