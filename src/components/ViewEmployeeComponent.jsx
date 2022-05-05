import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }
    cancel(){
        this.props.navigate('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID: </label>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                    </div>
                    
                    <button className="btn btn-danger col-md-3"  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                    <br/>
                </div>
            </div>
        )
    }
}
function WithNavigate(props) {
    let navigate = useNavigate();
    let {id}=useParams();
    return <ViewEmployeeComponent {...props} navigate={navigate} id={id} />
}

export default WithNavigate