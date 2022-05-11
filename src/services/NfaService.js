import axios from 'axios';

// const API_BASE_URL = "http://localhost:8090/nfa";
const API_BASE_URL = "https://nfatodfa.ddns.net/nfa";

class EmployeeService {

    getNfas(){
        return axios.get(API_BASE_URL)
                .catch(error=>{
                    console.log( error);
                    return error;
                });
    }

    createNfa(nfa){
        return axios.post(API_BASE_URL, nfa)
                .catch(error=>{
                    console.log( error);
                    return error;
                });
    }

    getNfaById(nfaId){
        return axios.get(API_BASE_URL + '/' + nfaId)
                .catch(error=>{
                    console.log( error);
                    return error;
                });
    }

    getNfaDfaById(nfaId){
        return axios.get(API_BASE_URL + '/dfa/' + nfaId)
                .catch(error=>{
                    console.log( error);
                    return error;
                });
    }

    updateNfa(nfa, nfaId){
        return axios.put(API_BASE_URL + '/' + nfaId, nfa)
                .catch(error=>{
                    console.log( error);
                    return error;
                });
    }

    deleteNfa(nfaId){
        return axios.delete(API_BASE_URL + '/' + nfaId)
                .catch(error=>{
                    console.log( error);
                    return error;
                });
    }
}

export default new EmployeeService()