import React, { Component } from 'react'
import NfaService from '../services/NfaService';
import { useNavigate, useParams } from 'react-router-dom';

class CreateNfaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            states: '',
            symbols: '',
            initialState: '',
            finalState: '',
            transition: ''
        }
        this.changeStatesHandler = this.changeStatesHandler.bind(this);
        this.changeSymbolsHandler = this.changeSymbolsHandler.bind(this);
        this.changeInitialStateHandler = this.changeInitialStateHandler.bind(this);
        this.changeFinalStateHandler = this.changeFinalStateHandler.bind(this);
        this.changeTransitionHandler = this.changeTransitionHandler.bind(this);

        this.saveNfa = this.saveNfa.bind(this);
    }

    
    saveNfa = (e) => {
        e.preventDefault();
        let nfa = {states: this.state.states,
                    symbols: this.state.symbols,
                    initialState: this.state.initialState,
                    finalState: this.state.finalState,
                    transition: this.state.transition};
        console.log('NFA => ' + JSON.stringify(nfa));

        NfaService.createNfa(nfa).then(res =>{
            this.props.navigate('/nfas');
        });
    }
    
    changeStatesHandler= (event) => {
        this.setState({states: event.target.value});
    }

    changeSymbolsHandler= (event) => {
        this.setState({symbols: event.target.value});
    }

    changeInitialStateHandler= (event) => {
        this.setState({initialState: event.target.value});
    }

    changeFinalStateHandler= (event) => {
        this.setState({finalState: event.target.value});
    }

    changeTransitionHandler= (event) => {
        this.setState({transition: event.target.value});
    }

    cancel(){
        this.props.navigate('/nfas');
    }

    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <h3 className='text-center'>Add NFA</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> States: </label>
                                            <input placeholder="States" name="states" className="form-control" 
                                                value={this.state.states} onChange={this.changeStatesHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Symbols: </label>
                                            <input placeholder="Symbols" name="symbols" className="form-control" 
                                                value={this.state.symbols} onChange={this.changeSymbolsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Initial State: </label>
                                            <input placeholder="Initial State" name="initialState" className="form-control" 
                                                value={this.state.initialState} onChange={this.changeInitialStateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Final State: </label>
                                            <input placeholder="Final State" name="finalState" className="form-control" 
                                                value={this.state.finalState} onChange={this.changeFinalStateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Transition: </label>
                                            <input placeholder="Transition" name="transition" className="form-control" 
                                                value={this.state.transition} onChange={this.changeTransitionHandler}/>
                                        </div>
                                        <br/>
                                        <button className="btn btn-success" onClick={this.saveNfa}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <CreateNfaComponent {...props} navigate={navigate} />
}

export default WithNavigate;