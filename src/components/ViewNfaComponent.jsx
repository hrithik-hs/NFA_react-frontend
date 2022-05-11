import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NfaService from '../services/NfaService';

class ViewNfaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            nfa: {}
        }
    }

    componentDidMount(){
        NfaService.getNfaById(this.state.id).then( res => {
            this.setState({nfa: res.data});
        })
    }
    cancel(){
        this.props.navigate('/nfas');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View NFA Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <b><label> NFA States: </label></b>
                            <div> { this.state.nfa.states }</div>
                        </div><br/>
                        <div className = "row">
                            <b><label> NFA Symbols: </label></b>
                            <div> { this.state.nfa.symbols }</div>
                        </div><br/>
                        <div className = "row">
                            <b><label> NFA Initial State: </label></b>
                            <div> { this.state.nfa.initialState }</div>
                        </div><br/>
                        <div className = "row">
                            <b><label> NFA Final State: </label></b>
                            <div> { this.state.nfa.finalState }</div>
                        </div><br/>
                        <div className = "row">
                            <b><label> NFA Transition: </label></b>
                            <div> { this.state.nfa.transition }</div>
                        </div><br/>
                        <div className = "row">
                            <b><label> NFA Regular Expression: </label></b>
                            <div> { this.state.nfa.regularExpression }</div>
                        </div><br/>
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
    return <ViewNfaComponent {...props} navigate={navigate} id={id} />
}

export default WithNavigate