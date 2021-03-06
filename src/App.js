import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


import ListNfaComponent from './components/ListNfaComponent';
import CreateNfaComponent from './components/CreateNfaComponent';
import UpdateNfaComponent from './components/UpdateNfaComponent';
import ViewNfaComponent from './components/ViewNfaComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact element = {<ListNfaComponent/>}></Route>

                          <Route path = "/nfas" element = {<ListNfaComponent/>}></Route>
                          <Route path = "/add-nfa" element = {<CreateNfaComponent/>}></Route>
                          <Route path = "/view-nfa/:id" element = {<ViewNfaComponent/>}></Route>
                          <Route path = "/update-nfa/:id" element = {<UpdateNfaComponent/>}></Route>
                    </Routes>
                </div>
              {/* <FooterComponent /> */}
        </Router>
    </div>
  );
}

export default App;
