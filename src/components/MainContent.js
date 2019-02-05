import React from "react";
import Grid from './Grid';

function MainContent(){
    // const date = new Date()
    // const Hours = date.getHours()
    // let timeOfDay;
    // const styles = {
    //     backgroundColor:"red"
    // }

    // if(Hours<12){
    //     timeOfDay="morning"
    //     styles.backgroundColor="blue"
    //     styles.color="white"
    // }
    // else{
    //     timeOfDay= "night"
    // }
    return(
        <div >
            <div className= "container">
            
            
                {/* <p style={styles}>Good {timeOfDay}</p> */}
                <Grid/>
            </div>
        </div>
    )
}

export default MainContent