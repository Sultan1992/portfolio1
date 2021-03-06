import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/Home'>Home</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/sultan.minze"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://www.linkedin.com/in/sultan-feto-811685143/"><i className="fa fa-linkedin" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://codepen.io/minae/pen/xxEaeNQ?editors=1000"><i className="fa fa-codepen" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 702-835-3125</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> sultanfeto@gmail.com</a>
                        
                    </div>
                    &copy; Copyright 2021-<script>document.write(new Date().getFullYear())</script>, Sultan Feto,All rights reserved

                </div>
            </div>
        </footer>
    );
}
export default Footer;