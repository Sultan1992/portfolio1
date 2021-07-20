
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col,FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom';


class Contact extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
            Name: '',
            phoneNum: '',
            email: '',
            feedback: '',
            touched: {
               Name: false,
                phoneNum: false,
                email: false
            }
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event)
    {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
        
    }
    //handle error
    validate(Name,phoneNum,email) {

        const errors = {
            Name: '',
         
            phoneNum: '',
            email: ''
        };

        if (this.state.touched.Name) {
            if (Name.length < 4) {
                errors.Name = 'Name must be at least 2 characters.';
            } else if (Name.length > 30) {
                errors.Name = ' Name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'Invalid Entary.! The Phene number field should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = ' Invalid entary.! Email should contain a @';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

  

    //handle evevnts 
    handleSubmit(event) {
        alert('Thank you for contacting me. I will get back to you as soon as possible.');
        event.preventDefault();
    }
  


    render()
    {
        const errors = this.validate(this.state.Name, this.state.phoneNum, this.state.email);    

        return (
            // Ui will displyed here .
            <div className="col">
                <hr></hr>
                  <div class="col text-center">
                 <h3 class="heading">CONTACT</h3>
                    <div class="heading-underline"></div>
                    </div>
                <hr/>
                <div class="col-12 text-center">
        <h3>Have a question or Want to work together?</h3>
        <p class="promotion">If you are here to promote your business, I will not respond you. Thank you for understanding the value of time. </p>
        <hr />
    </div>   
               <div className="col bg-light">
               
                <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="Name" name="Name"
                                        placeholder="Your Name"
                                value={this.state.Name}
                                invalid={errors.Name}
                                onBlur={this.handleBlur("Name")}
                                onChange={this.handleChange} />
                             <FormFeedback>{errors.Name}</FormFeedback>
                                </Col>                        
                    </FormGroup>
                    <FormGroup row>
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                    value={this.state.phoneNum}
                                    invalid={errors.phoneNum}
                                    onBlur={this.handleBlur("phoneNum")}
                                    onChange={this.handleChange} />
                                 <FormFeedback>{errors.phoneNum}</FormFeedback>
                                </Col>
                    </FormGroup>
                    <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                    value={this.state.email}
                                    invalid={errors.email}
                                    onBlur={this.handleBlur("email")}
                                    onChange={this.handleChange} />
                                <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                    </FormGroup>
                    <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Your Message </Label>
                                <Col md={10}>
                                    <Input type="textarea" id="feedback" name="feedback"
                                        rows="12"
                                        value={this.state.feedback}
                                        onChange={this.handleChange}></Input>
                                </Col>
                            </FormGroup>
                    <FormGroup row>
                                <Col  md={{size: 10, offset: 2}} >
                                    <Button type="submit" color="primary">
                                       Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                    </Form>
                    </div>
                </div>
      );
    }
  }
  
export default Contact;