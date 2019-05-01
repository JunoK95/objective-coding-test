import React, { Component } from 'react';
import Data from '../../data.json'
import PositionTable from './PositionTable.js';

class MainTable extends Component{
    state = {
        applicants: [],
        skills: []
    }

    componentDidMount(){
        //Where data would be set if json file wasn't local
        const { applicants, skills } = Data
        this.setState({...this.state, applicants: applicants, skills: skills})
    }

    render(){
        const { applicants, skills } = this.state

        const jobPositionIds = applicants.reduce((accumulator, current) => {
            if(!accumulator.includes(current.job_id)){
                accumulator.push(current.job_id)
            }       
            return accumulator
        },[])

        const uniqueSkills = skills.reduce((accumulator, current) => {
            if(!accumulator.includes(current.name)){
                accumulator.push(current.name)
            }
            return accumulator
        }, [])

        const positionTable = jobPositionIds.map(job_id => {
            const peopleList = applicants.filter(person => {return (person.job_id === job_id)})
            return <PositionTable key={job_id} job_id={job_id} applicants={peopleList} />
        })

        return(
            <table className="job-applicants">
                <thead>
                    <tr>
                        <th scope="col">Job</th>
                        <th scope="col">Applicant Name</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Website</th>
                        <th scope="col">Skills</th>
                        <th scope="col">Cover Letter Paragraph</th>
                    </tr>            
                </thead>
                {positionTable}
                <tfoot>
                    <tr>
                        <td colSpan="6">{applicants.length} Applicants, {uniqueSkills.length} Unique Skills</td>
                    </tr>
                </tfoot> 
            </table>
        )
    }
}

export default MainTable