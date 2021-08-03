
import React from 'react';
import About from './About';
import  Portfolio from './portfolio.js';
import Contact from './contact';



function Home(props)
{
  
        return (
            <div className="container">
                <a href="#About"></a>
                <a href="#portfolio"></a>
                <About />
                < Portfolio/>
             
                <Contact />

            </div>
        );
    }


export default Home; 