import React, { Component } from 'react';
import Header from './header';
import Footer from './Footer';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './contact';
import About from './About';
import portfolio from './portfolio'

class Main extends Component {
   

    render()
    {
        const HomePage = () =>
        {
            return (
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/portfolio' component={portfolio} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
                </div>
        );
    };
}

export default Main;
