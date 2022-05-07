import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NfadfaService from '../services/NfadfaService';
import GraphComponent from './GraphComponent';
import Graph from "react-graph-vis";
// import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
// import { View } from 'react-native';

class ViewNfaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            nfas: []
        }
    }

    componentDidMount(){
        NfadfaService.getNfaDfaById(this.state.id).then( res => {
            this.setState({nfas: res.data});
        })
    }
    cancel(){
        this.props.navigate('/nfas');
    }

    render(){
        return (
            <div>
                <br/>
                <h3 className = "text-center"> View NFA Details</h3>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> States</th>
                            <th> Symbols</th>
                            <th> Initial State</th>
                            <th> Final State</th>
                            <th> Transition</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.nfas.map(  // iterating over the list 
                                nfa => 
                                <tr key = { nfa.id}>
                                        <td> { nfa.states} </td>   
                                        <td> { nfa.symbols}</td>
                                        <td> { nfa.initialState}</td>
                                        <td> { nfa.finalState}</td>
                                        <td> { nfa.transition}</td>
                                        {/* <td> {<GraphComponent/>}</td> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <button className="btn btn-danger col-md-3"  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                <br/>
            </div>
        )
    }
}
function WithNavigate(props) {
    let navigate = useNavigate();
    let {id}=useParams();
    return <ViewNfaComponent {...props} navigate={navigate} id={id} />
}

export default WithNavigate