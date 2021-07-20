
import myPhoto from './myPhoto.jpg'

import React, { Component } from 'react'
import '../App.css';


class About extends Component
{
     
    constructor(props) {
        super(props);
        this.state = {

           
        };
    }
    render() {
        return (
            <div className="about">
                <div class="col text-center">
                 <h3 class="heading">About</h3>
                    <div class="heading-underline"></div>
                    </div>
                <div class="row">
                    
        <div class=" col-6  text-center">
      <h3>Fast</h3>
      <p>Fast load times and lag free interactionis my highest priority.</p>
    </div>
    <div class="col ">
      <h3>Intuitive</h3>
      <p>Strong preference for easy to use, intuitive UX/UI.</p>
    </div>
    <div class="col-6 text-center">
      <h3>Responsive</h3>
      <p>My layouts will work on any device, Mobile, tablet and other</p>
    </div>
    <div class="col">
      <h3>Dynamic </h3>
      <p>I love making static website fully functional.</p>
    </div>
                </div>
                <hr/>
               
                <div className="row">
                    <div className="col">
                        <div className="image">
                        <img src={myPhoto} alt="photo" />
                    </div>
                    </div>
                    <div className="col -6">
                        <h1>Who is this guy?</h1>
                        A web developer is a programmer who specializes in, or
                        is specifically engaged in, the development of World Wide Web applications using 
                       
                    </div>
     
                </div>
                
                   
            <hr/>
     </div>
     )
    }
}
export default About
