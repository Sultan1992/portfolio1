
import React from 'react';
import About from './About';
import Contact from './contact'
import portfolio from './portfolio'


function Home(props)
{
  
        return (
            <div className="container">
                <About />
                <portfolio/>
                <Contact />

            </div>
        );
    }


export default Home; 