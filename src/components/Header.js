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

    restart1 = () => {
        this.props.createGridFunction()
    }

    render() {

        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">Connect 4</span>
                    <button className= "btn" onClick={() => this.restart1()}> restart </button>
                </nav>
            </div>
        )
    }
}

export default Header;