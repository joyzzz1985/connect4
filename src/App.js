// import React, {Component} from 'react';
import React from "react";

import Footer from './components/Footer';
import Header from './components/Header';
import Maincontent from "./components/MainContent";



// class App extends Component {
function App() {

        return (
            
            // <div className="container">
            <div>
                <Header title="mijntitel"/>
                <Maincontent/>
                <Footer/>     
            </div>
        );
    }

export default App;