import React, { Component } from 'react';
import Header from './header';
import Footer from './Footer';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './contact';
import About from './About';
import Portfolio from './portfolio'

class Main extends Component {
   

    render()
    {
        const HomePage = () =>
        {
            return (
                <home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/portfolio' component={Portfolio} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
                </div>
        );
    };
}

export default Main;
