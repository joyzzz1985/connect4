import React from "react"

class AlphaGrid extends React.Component{
    
   

    constructor(props){
        var x = 10;
        var y = 20;
        var grid = [];
        
         var RandomLetter = () =>{
            var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            var letter = letters[Math.floor(Math.random() * letters.length)];
            return letter
        }

        for(var i=0; i < x; i++){
            grid[i] = [];
            for(var j=0; j < y; j++){
                grid[i][j] = RandomLetter();
            }
        }

        super(props)
        this.state= {
            grid : grid,
            promptedletter : "a",
            rightanswer: false,
        }

    }


    selectedCell = (selectedletter, x, y) =>{

        var currentCell = this.state.grid[x][y];
        // console.log(currentCell)
        if(currentCell === this.state.promptedletter){
            var newGrid = [...this.state.grid];
            newGrid[x][y] = "Yes";
            this.setState({
                grid: newGrid
            })
        }
        else{
            var newGrid1 = [...this.state.grid];
            newGrid1[x][y] = "No";
            this.setState({
                grid: newGrid1
            })
        }

        
        
        // if(this.state.winner === ""){
        //     for(var i = this.state.x - 1; i >= 0; i--){
        //         var currentCell = this.state.grid[i][columnNr];
        //         if(currentCell === ""){
        //             var newGrid = [...this.state.grid];
        //             newGrid[i][columnNr] = this.playerColor();
        //             this.setState({
        //                 grid: newGrid
        //             }, () => {
        //                 this.check4InaRow();
        //                 this.switchPlayer();
        //             })

        //             break;
        //         }
     
        //     } 
        // }
              
      
        console.log(selectedletter)
        console.log(x)
        console.log(y)
        if(selectedletter === this.state.promptedletter){
            console.log("yes")
            this.setState({
               rightanswer:true
            })
        }
        else{
            console.log("no")
        }



    }
    
    render(){
        return(
            <div>
                <h3 > dit wordt alphagrid </h3>
                <table   className="table">
                {
                    this.state.grid.map((row, rindex) => {
                        
                        var columns = row.map((cell, index) => {
                            // var aLetter = this.RandomLetter()
                            return <td key={"cell" +rindex + ":" + index} onClick= {() => this.selectedCell(cell,rindex,index)}>  
                            <svg width="50" height="50">
                                <circle cx="25" cy="25" r="25" fill={cell === "Yes" ? "green" : cell === "No" ? "red" : "lightgrey"} />
                            </svg>
                            {cell}
                            
                            </td>
                        })
                    
                        return  <tr key = {"row" + rindex} >{columns}</tr>
                    })
                    }
                </table>
        
            </div>
        
        )


    }
   

}

export default AlphaGrid