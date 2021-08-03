import React, { Component }  from 'react';
import { Nav,Navbar, NavbarBrand, Jumbotron ,NavbarToggler, Collapse, NavItem,} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Header extends Component
{
    
    //add taggle nave states 
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }
//create method to taggle nav
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
//render 
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                            <h1>Hello, I'm Sultan Feto </h1> {''}
                                <h2>I 'm Full-Stack Web Developer</h2> {''}
                                <h2><Link to='/portfolio'>View My Work</Link></h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" ></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                               
                                
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/portfolio">
                                        <i className="fa fa-briefcase" /> Portfolio
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;