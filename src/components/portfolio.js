import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class Portfolio extends Component {
    


    render() {
     return (
         <div className="container">
             <div class="col text-center">
                 <h3 class="heading">Portfolio</h3>
                    <div class="heading-underline"></div>
             </div>
         
             <div className="row">
                 <div className="col mb-2 ">
                    <Card style={{ width: '18rem' }}>
                        <CardImg variant="top" src="./assets/images/bootstrap-logo.png"/>
                        <CardBody>
                            <CardTitle> Bootsrap Projects</CardTitle>
                             <CardText>
                             This card cantains my bootsrap Projects.It is mobile responsive frond end website.
                                 I used langueges such as Html/ css, javascript and Jquery.
                                 
  
                             </CardText>
                             <a target="_blank" href="https://btrpsite.netlify.app">Nu campsite using Bootsrap</a><br/>
                             
                         </CardBody> 
                     </Card>
                 </div>




                 <div className="col-6 mb-4 ">
                    <Card style={{ width: '18rem' }}>
                        <CardImg variant="top" src="./assets/images/javascript.png"  />
                        <CardBody>
                            <CardTitle>Javascript Projects</CardTitle>
                             <CardText>
                              Collection of links to  my Javascript projects.
                             </CardText>
                             <a target="_blank" href="https://jscriptweatherapp.netlify.app">Weather Tracking website</a>

                         </CardBody> 
                     </Card>
                 </div>

                 <div className="col mb-2 ">
                    <Card style={{ width: '18rem' }}>
                        <CardImg variant="top" src="./assets/images/react.jpeg"   />
                        <CardBody>
                            <CardTitle>ReactJs Projects</CardTitle>
                             <CardText>
                                 I Have linked my react webite in this card.
 
                             </CardText>
                             <li> <a target="_blank" href="https://reactjstodolists.netlify.app/">to do/peoples's daily activities tracking app.</a></li>
                                 <br />
                            <li> <a target="_blank" href="https://reactjsncamp.netlify.app">Nu campsite using react</a></li>

                         </CardBody>
                     </Card>
                 </div>

                 <div className="col mb-2">
                    <Card style={{ width: '18rem' }}>
                        <CardImg variant="top" src="./assets/images/react-native.jpeg"  />
                        <CardBody>
                            <CardTitle>React native Projects</CardTitle>
                             <CardText>
                                 Liks to react native web and mobile  application

                             </CardText>
                          
                             <li> <a target="_blank" href="./assets/images/a.html">Native application</a></li>
                         </CardBody>
                     </Card>
                 </div>
                 
             </div>
           
         </div>
         
        );
    }
}
export default Portfolio;
