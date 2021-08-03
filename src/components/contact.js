import React from "react";
import {
    Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';


export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [phone, setPhone] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
      <section id="contact" className="relative">
          <hr/>
          <div class="col text-center">
                 <h3 class="heading">Contact</h3>
                    <div class="heading-underline"></div>
                    </div>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2815.197553168211!2d-93.
                      26939334921906!3d45.122332378995715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!
           4f13.1!3m3!1m2!1s0x52b325381b8a3b5f%3A0x12324e410fa7ecf7!2s151%2083rd%20Ave%20NE%2C%20Fridley%2C%20MN%2055432!5e0!3m2!1sen!2sus!4v1627103029047!5m2!1sen!2sus"/>
        
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
             151 83rd Ave Ne <br />
               Minneapolis,MN 55432
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
              sultanfeto@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">702-835-3125</p>
            </div>
          </div>
              </div>
              <hr />
              <div className="col-md-10">
                        <Form netlify
          name="contact"
          onSubmit={handleSubmit}
                      className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div class="col-12 text-center">
              <h1 className="col bg-primary text-light">Hire Me </h1>
        <h3>Have a question or Want to work together? If so, Cantact me!.</h3>
        <p class="promotion">If you are here to promote your business, I will not respond you. Thank you for understanding the value of time. </p>
       
                 </div>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}> Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="fname" name="name"
                                        placeholder=" Name"
                                        onChange={(e) => setName(e.target.value)} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="tel" id="phone" name="phone"
                                  placeholder="Phone number"
                                  onChange={(e) => setPhone(e.target.value)} />
                                       
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)} />
                                </Col>
                            </FormGroup>
                            
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Your Message</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message," name="message,"placeholder="Type here.."
                                        rows="12"
                                        onChange={(e) => setMessage(e.target.value)}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 20, offset: 2}}>
                                    <Button type="submit" color="primary">
                                      Send
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            
    </section>
  );
}
