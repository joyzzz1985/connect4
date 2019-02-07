import React from 'react';

class Grid extends React.Component {

    constructor(props) {
        super(props);
        var x =6;
        var y = 6;
        var inputx = 6;
        var inputy= 6

        this.state = {
            grid: [],           
            turn: true,
            x: props.x || x,
            y: props.y || y,
            winner:"",
            inputx,
            inputy
        }
    }

    // function to create a grid
    createGrid = () => {
        var grid = []

        for(var i=0; i < this.state.x; i++){
            grid[i] = [];
            for(var j=0; j < this.state.y; j++){
                grid[i][j] = "";
            }
        }

        this.setState({
            grid:[...grid],
            winner:""
        })
    }

    // set playercolor to red or yellow
    playerColor = () => {
        if(this.state.turn){
            return "red"
        }else {
            return "yellow"
        }
    }

    // check if there are 4 same elements
    check4InaRow = () => {
        var player = this.playerColor()
        // loop over row 
        for(var x = 0; x  < this.state.x; x++){
            //loop over column 
            for(var y = 0; y  < this.state.y; y++){
                
                
                var fourInARowFound = true;
                
                //check horizontal
                if(x + 3 < this.state.x){
                    for(var j = 0; j < 4; j++){
                        if(this.state.grid[x + j][y] !== player){
                            fourInARowFound = false;
                            break;
                        }  
                    } 

                    if(fourInARowFound){
                        this.setState({
                            winner: this.playerColor()
                        })
                        return null;
                    }
                }       

                //check vertical
                if(y + 3 < this.state.y){
                    fourInARowFound = true;
                    for(var k = 0; k < 4; k++){
                        
                        if(this.state.grid[x][y+k] !== player){
                            fourInARowFound = false;
                            break;
                        }
                    } 
                    if(fourInARowFound){
                        this.setState({
                            winner: this.playerColor()
                        })
                        return null;
                    }
                }

                //check down-left
                fourInARowFound = true;
                if((x + 3 < this.state.x) && (y + 3 < this.state.y) ){
                    fourInARowFound = true;
                    for(var l = 0; l < 4; l++){

                        if(this.state.grid[x+l][y+l] !== player){ 
                            fourInARowFound = false;
                            break;
                        }
                    } 

                    if(fourInARowFound){
                        this.setState({
                            winner: this.playerColor()
                        })
                        return null;
                    }
                }

                //check down-right
                fourInARowFound = true;
                if((x - 3 > 0) && (y + 3 < this.state.y)){
                    fourInARowFound = true;
                    for(var m = 0; m < 4; m++){
                        if(this.state.grid[x-m][y+m] !== player){
                       
                            fourInARowFound = false;
                            break;
                        }  
                    } 
                    if(fourInARowFound){
                        this.setState({
                            winner: this.playerColor()
                        })
                        return null;
                    }
                }
            }    
        }
    }

    // drop pin if click on colomn
    dropPin = (columnNr) => {
        if(this.state.winner === ""){
            for(var i = this.state.x - 1; i >= 0; i--){
                var currentCell = this.state.grid[i][columnNr];
                if(currentCell === ""){
                    var newGrid = [...this.state.grid];
                    newGrid[i][columnNr] = this.playerColor();
                    this.setState({
                        grid: newGrid
                    }, () => {
                        this.check4InaRow();
                        this.switchPlayer();
                    })
                    break;
                }
            } 
        }        
    }

    // function to change turn in false/true
    switchPlayer = () => {
        this.setState({
            turn: !this.state.turn
        })

    }

    //change value of inputx
    handleChangex = (event) => {
        this.setState({
            inputx: event.target.value
        });
    }

    //change value of inputx
    handleChangey = (event) => {
        this.setState({
            inputy: event.target.value
        });
    }

    //function to change gridsize
    changeGrid = () => {
        //check is input x is a valid input
        if(isNaN(this.state.inputx || this.state.inputy)){
            alert("input is not a number")
        }
        else{
            debugger;
            this.setState({
                x: this.state.inputx,
                y: this.state.inputy
            },() => {
                this.createGrid()
            })  
        }
    }

    render() {
        return(

            <div>
                <div className= "row rowform">
                    <div className = "col-sm-4">
                        <div className="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon3">X = </span>
                                </div>
                                <input className="form-control form-control-lg" onChange={this.handleChangex} value={this.state.inputx} id="inputx" />
                            </div>
                        </div>
                    </div>

                    <div className = "col-sm-4">
                        <div className ="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon3">Y = </span>
                                </div>
                                <input className="form-control form-control-lg"onChange={this.handleChangey} value={this.state.inputy} id="inputy" />
                            </div>
                        </div>
                    </div>

                    <div className = "col-sm-4">
                        <div className ="form-group">
                            <button className= "btn btn-success" onClick={this.changeGrid}>change grid</button>
                        </div>
                    </div>                   
                </div>

                {
                    this.state.winner===""?

                <div className= "row ">
                    <div className = "col-sm-8">
                        <table   className="table">
                        {
                            this.state.grid.map((row, rindex) => {
                            
                                var columns = row.map((cell, index) => {
                                    return <td key={"cell" +rindex + ":" + index} onClick= {() => this.dropPin(index)} >
                                    <div className = "itemcircle">
                                        <svg width="40" height="40">
                                            <circle cx="20" cy="20" r="20" fill={cell === "" ? "lightgrey": cell} />
                                        </svg>
                                    </div>
                                    </td>
                                })
                            
                                return  <tr key = {"row" + rindex} >{columns}</tr>
                            })
                        }
                        </table>
                    </div>
                </div>

                : <div className= "container containerwinner"><div><h1>Congratulations, the winner is:  <h1 className={this.state.winner}> ---{this.state.winner}---</h1></h1></div></div>
                }

            </div>
        )
    }   
}

export default Grid;