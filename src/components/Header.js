import React from 'react';



class Header extends React.Component {

    constructor(props) {
        super(props);
        var inputx =""
        var inputy=""

        this.state = {
            inputx,
            inputy
        }
    }

    render() {

        return(
            <div>


                <nav className="navbar navbar-dark bg-dark">
            
                    <span className="navbar-brand mb-0 h1">Connect 4</span>
            
          
                
                </nav>
                    

            </div>

    
        )
    }
}


export default Header;