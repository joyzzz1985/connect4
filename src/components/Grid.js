import React from 'react';

class Grid extends React.Component {

    constructor(props) {
        super(props);
        var x =6;
        var y = 6;
        // var grid = []
        var inputx =""
        var inputy=""

        this.state = {
            grid: [],           
            turn: true,
            x:x,
            y:y,
            winner:"",
            inputx,
            inputy

        }

        
        // this.createGrid(this.x,this.y)
        // createGrid = () => {
        //     for(var i=0; i < x; i++){
        //         grid[i] = [];
        //         for(var j=0; j < y; j++){
        //             grid[i][j] = "";
        //         }
        //     }

        // }

        // for(var i=0; i < x; i++){
        //     grid[i] = [];
        //     for(var j=0; j < y; j++){
        //         grid[i][j] = "";
        //     }
        // }


        // setInterval(() => {
        //     this.dropPin(Math.round(Math.random() * 1000) % x);
        // }, 1000)
    }

    componentDidMount = () =>{

        this.createGrid(this.state.x,this.state.y)
        
    }

    createGrid = (x,y) => {
        var grid = []

        for(var i=0; i < x; i++){
            grid[i] = [];
            for(var j=0; j < y; j++){
                grid[i][j] = "";
            }
        }

        this.setState({
            grid:[...grid]
        })
    }

    playerColor = () => {
        if(this.state.turn){
            return "red"
        }else {
            return "yellow"
        }
    }

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


    switchPlayer = () => {
        this.setState({
            turn: !this.state.turn
        })

    }

    Restart1 = () => {
        debugger;
        window.location.reload()
        this.createGrid(this.state.x,this.state.y)
    }

    handleChangex = (event) => {
        this.setState({
            inputx: event.target.value
        });
    }

    handleChangey = (event) => {
        this.setState({
            inputy: event.target.value
        });
    }

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
                var x = this.state.x
                console.log("this is x" + this.state.x)
                var y = this.state.y
                console.log("this is y" + this.state.y)
                this.createGrid(x,y)
            })

            

            
            
            
        }

    }

    render() {

        return(
        <div >
            
            <div className= "row">
                <div className = "col-sm-2">
                <div className="form-group">
                    <label for="inputx"> <strong>dit is input x:</strong> </label>
                    <input className="form-control form-control-lg" onChange={this.handleChangex} value={this.state.inputx} id="inputx" />
                </div>
                <div className ="form-group">
                    <label for="inputy"> <strong>dit is input y:</strong></label>
                    <input className="form-control form-control-lg"onChange={this.handleChangey} value={this.state.inputy} id="inputy" />
                   
                </div>
                <div className ="form-group">
                    <button className= "btn btn-primary" onClick={this.changeGrid}>change grid</button>
                </div>
                </div>
            
                <div className = "col-sm-8">
            <table   className="table">
               {
                this.state.grid.map((row, rindex) => {
                   
                    var columns = row.map((cell, index) => {
                        return <td key={"cell" +rindex + ":" + index} onClick= {() => this.dropPin(index)} >
                        <div className = "itemcircle">
                            <svg width="30" height="30">
                                <circle cx="15" cy="15" r="15" fill={cell === "" ? "lightgrey": cell} />
                            </svg>
                        </div>
                        </td>
                    })
                
                    return  <tr key = {"row" + rindex} >{columns}</tr>
                })
                }
            </table>
            </div>
            <div className = "col-sm-2">
            <h1> winner: {this.state.winner}</h1>
            <button onClick={() => this.Restart1()}> restart </button>
            </div>
         </div>

        </div>
        )
    }   
}


export default Grid;