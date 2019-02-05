// import React, {Component} from 'react';
import React from "react";

import Footer from './components/Footer';
import Header from './components/Header';
import Maincontent from "./components/MainContent";



// class App extends Component {
function App() {

    // constructor(props) {
    //     super(props);
    //     this.grid = [7][7];
    //     this.cached = {}
        
    //     this.board = [
    //         [0,0,0,0,0,0,0],
    //         [0,0,0,0,0,0,0],
    //         [0,0,0,0,0,0,0],
    //         [0,0,0,0,0,0,0],
    //         [0,0,0,0,0,0,0],
    //         [0,0,0,0,0,0,0],
    //         [0,0,0,0,0,0,0]
    //     ];
        
    //     this.state = {
    //         empty: true,
    //         turn: "Red",
        
    //       }
    // }

    // render() {
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