import React from 'react';

function Header(props){
    return(
        <div>
            <header className = "navbar"> text header component {props.title}</header>
        </div>

    )

}

export default Header;