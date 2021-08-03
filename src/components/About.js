
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
            <hr/>
                <div class="col text-center">
                 <h3 class="heading">About</h3>
                    <div class="heading-underline"></div>
                    </div>
                <div class="row">
                    
        <div class=" col-6  text-center">
      <h3>Fast</h3>
                <p>Fast load times and lag free interaction is my highest priority.</p>
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
                <h1>Who am I?</h1>
                 I am a Full stack web developer currently reside In <a href="https://www.google.com/maps/place/Minn" target="_blank">Minnesota,USA</a> 
                <br /> I love coding,designing website and make it functional. <br />
                </div>
                <div className="col -6">
                <h1>Skills</h1>
                <p>On scale of 1-5, I rate my programming knowledge as follows</p>
                <h1>Frond end</h1>
                Html/Css : <strong>5</strong> <br/>
                Javascript:  <strong>4</strong>  <br/>
                ReactJs/Redux:  <strong>3</strong>   <br/>
                React native:  <strong>3</strong> <br />
                Anguler:  <strong>2</strong>   <br />
                Vuejs :  <strong>2</strong>   <br/>

                <h1>Back end</h1>
                Php: <strong>4</strong> <br />
                Mysql: <strong>4</strong>  <br />
                NodeJs: <strong>2</strong> <br />
                MangoDb:  <strong>2</strong>  <br />
                <h1>Others</h1>  
                Shopify: <strong>4</strong> <br />
                Wordpress: <strong>3</strong>  <br />
               </div>
     
                </div>
                
                   
            <hr/>
     </div>
     )
    }
}
export default About
