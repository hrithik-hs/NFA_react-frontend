import React, { Component } from 'react';
import NfaService from '../services/NfaService'
import { useNavigate, useParams } from 'react-router-dom';



class ListNfaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                nfas: []
        }

        // this.addEmployee = this.addEmployee.bind(this);
        // this.editEmployee = this.editEmployee.bind(this);
        // this.deleteEmployee = this.deleteEmployee.bind(this);

        this.addNfa = this.addNfa.bind(this);
        this.editNfa = this.editNfa.bind(this);
        this.deleteNfa = this.deleteNfa.bind(this);
    }

    deleteNfa(id){
        NfaService.deleteNfa(id).then( res => {
            this.setState({nfas: this.state.nfas.filter(nfa => nfa.id !== id)});
        });
    }
    viewNfa(id){
        this.props.navigate(`/view-nfa/${id}`);
    }

    editNfa(id){
        // this.props.history.push(`/add-nfa/${id}`);
        this.props.navigate(`/update-nfa/${id}`);

    }

    componentDidMount(){ //1st
        NfaService.getNfas().then((res) => {
            this.setState({ nfas: res.data});
        });
    }

    addNfa(){
        // this.props.history.push('/add-nfa/_add');
        this.props.navigate('/add-nfa');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">NFA List</h2>
                 <div className = "row col-md-3 " >
                    <button className="btn btn-primary" onClick={this.addNfa}> Add NFA</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> States</th>
                                    <th> Symbols</th>
                                    <th> Initial State</th>
                                    <th> Final State</th>
                                    <th> Transition</th>
                                    <th> Actions</th>
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
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewNfa(nfa.id)} className="btn btn-success">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.editNfa(nfa.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteNfa(nfa.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <ListNfaComponent {...props} navigate={navigate} />
}

// export default ListNfaComponent;
export default WithNavigate;
