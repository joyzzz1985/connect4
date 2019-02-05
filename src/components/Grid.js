import React from 'react';

class Grid extends React.Component {

    constructor(props) {
        super(props);
        var x =  6;
        var y =  6;
        var grid = []

     

    
        for(var i=0; i < x; i++){
            grid[i] = [];
            for(var j=0; j < y; j++){
                grid[i][j] = "";
            }
        }
        this.state = {
            grid: grid,           
            turn: true,
            x:x,
            y:y,
            winner:"",

        }

        
        // setInterval(() => {
        //     this.dropPin(Math.round(Math.random() * 1000) % x);
        // }, 1000)
    }

    playerColor = () => {
        // var svgred = <svg width="50" height="50">
        // <circle cx="25" cy="25" r="25" fill="red" />
        // </svg>
        // var svgyellow = <svg width="50" height="50">
        // <circle cx="25" cy="25" r="25" fill="yellow" />
        // </svg>
    
        if(this.state.turn){
            return "red"
        }else {
            return "yellow"
        }
    }

    check4InaRow = () => {
        // var collumn = 0;
        // var checklist = [false,false,false,false]
        // this.state.grid[i] dit is de eerste rij
        var player = this.playerColor()
        // loop over row 
        for(var x = 0; x  < this.state.x; x++){
            //loop over column 
            for(var y = 0; y  < this.state.y; y++){
                
                
                var fourInARowFound = true;
                
                //check horizontal
                if(x + 3 < this.state.x){
                    for(var j = 0; j < 4; j++){
                        //debugger;

                        if(this.state.grid[x + j][y] !== player){
                            fourInARowFound = false;
                            break;
                        }
                        
                    } 
                    if(fourInARowFound){
                        debugger;
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
                        //debugger;
                        
                        if(this.state.grid[x][y+k] !== player){
                            fourInARowFound = false;
                            break;
                        }

                    } 
                    if(fourInARowFound){
                        debugger;
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
                        //debugger;

                        if(this.state.grid[x+l][y+l] !== player){
                            
                            fourInARowFound = false;
                            break;
                        }
                        
                    } 
                    if(fourInARowFound){
                        debugger;
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
                        debugger;
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


          
         

    render() {
       // var rows = 

        return(
            //componenten kunnen maar 1 ding terugsturen, daarom in div
        <div>
            <p>Dit is Table component</p>
           
            <table   className="table">
               {
                this.state.grid.map((row, rindex) => {
                   
                    var columns = row.map((cell, index) => {
                        return <td key={"cell" +rindex + ":" + index} onClick= {() => this.dropPin(index)} >
                            <svg width="50" height="50">
                                <circle cx="25" cy="25" r="25" fill={cell === "" ? "lightgrey": cell} />
                            </svg>
                        
                        </td>
                    })
                
                    return  <tr key = {"row" + rindex} >{columns}</tr>
                })
                }
            </table>

            <h1> winner: {this.state.winner}</h1>

           
          
        </div>
        )
    }
    
    
}


export default Grid;