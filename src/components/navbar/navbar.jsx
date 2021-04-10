import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/navbar.css'


class Navbar extends Component {

    state = {
        click: false,
    }

    handleClick = () => {
        this.setState({ click: !this.state.click })
    }
    render() {
        const { click } = this.state;
        return (
            <nav className="navbar">
                <Link to="#" className='navbar-logo'>
                    Toyota
                </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
            </nav>
        );
    }
}

export default Navbar;