import React from 'react'
import GoogleMap from './Location'

function Contact() {

    const apiKey = 'AIzaSyC08ekpIlw5KxL6-it2iN8lyo0w0TJpS7A'
    const location = {lat: 25.114771489773084,  lng: 55.20500784232787 };
    return (
        <div>
            <section className="contact-us">
                <div className="container">
                    <div className="property-location mb-5">
                        <h3>Our Location</h3>
                        <div className="divider-fade"></div>
                        <div id="map-contact" className="contact-map w-100 h-100">
                        <GoogleMap apiKey={apiKey} location={location} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <h3 className="mb-4">Contact Us</h3>
                            <form id="contactform" className="contact-form" name="contactform" method="post" novalidate>
                                <div id="success" className="successform">
                                    <p className="alert alert-success font-weight-bold" role="alert">Your message was sent successfully!</p>
                                </div>
                                <div id="error" className="errorform">
                                    <p>Something went wrong, try refreshing and submitting the form again.</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" required className="form-control input-custom input-full" name="name" placeholder="First Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" required className="form-control input-custom input-full" name="lastname" placeholder="Last Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control input-custom input-full" name="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control textarea-custom input-full" id="ccomment" name="message" required rows="8" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" id="submit-contact" className="btn btn-primary btn-lg">Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-4 col-md-12 bgc">
                            <div className="call-info">
                                <h3>Contact Details</h3>
                                <p className="mb-5">Please find below contact details and contact us today!</p>
                                <ul>
                                    <li>
                                        <div className="info">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            <p className="in-p">Office 602 Dusseldrof business point Al BARSHA 1</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            <p className="in-p">+97144538357</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <p className="in-p ti">Info@tahanirealestate.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info cll">
                                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                                            <p className="in-p ti">9:00 a.m - 6:00 p.m</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
