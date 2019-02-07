
import React from "react";
import Header from './components/Header';
import Grid from './components/Grid';

class App extends React.Component {
    constructor(props){
        super(props);
            this.gridRef = React.createRef();
        }

        componentDidMount = () => {
            this.gridRef.current.createGrid()
        }

        render() { 
            return (

            <div>
                <Header createGridFunction={() => {this.gridRef.current.createGrid()}} />
                
                <div className= "thiscontainer">
                    <div className="container">
                    <Grid ref={this.gridRef} x={7} y ={7}/>
                    </div>
                </div>
            </div>
            ); 
        }
}

export default App;