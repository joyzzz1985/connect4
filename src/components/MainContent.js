import React from "react";
import Grid from './Grid';
import InputField from "./InputField"
import TodoItem from "./TodoItem"
import Jokes from "./Jokes"
import AlphaGrid from "./AlphaGrid"


function MainContent(){
    const date = new Date()
    const Hours = date.getHours()
    let timeOfDay;
    const styles = {
        backgroundColor:"red"
    }

    if(Hours<12){
        timeOfDay="morning"
        styles.backgroundColor="blue"
        styles.color="white"
    }
    else{
        timeOfDay= "night"
    }
    return(
        <div >
            <Grid/>
            <InputField/>
            <p style={styles}>Good {timeOfDay}</p>
            <TodoItem/>
            <Jokes question ="lalala" answer="nanana"/>

            <AlphaGrid/>
        </div>
    )
}

export default MainContent