import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="first-footer">
            <div className="top-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="netabout">
                                <a href="index.html" className="logo">
                                    <img src={process.env.PUBLIC_URL + "/images/LogoLight.jpg"} alt="netcom" />
                                </a>
                                <p>T for trust and transparency,
                                    T for Tahani real estate</p>
                            </div>
                            <div className="contactus">
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
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="navigation">
                                <h3>Navigation</h3>
                                <div className="nav-footer">
                                    {/* <ul>
                                        <li><a href="index.html">Home One</a></li>
                                        <li><a href="properties-right-sidebar.html">Properties Right</a></li>
                                        <li><a href="properties-full-list.html">Properties List</a></li>
                                        <li><a href="properties-details.html">Property Details</a></li>
                                        <li className="no-mgb"><a href="agents-listing-grid.html">Agents Listing</a></li>
                                    </ul> */}
                                    <ul className="nav-">
                                        <li><a href="agents">Agents Details</a></li>
                                        <li><a href="about">About Us</a></li>
                                        {/* <li><a href="blog.html">Blog Default</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li> */}
                                        <li className="no-mgb"><a href="contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <h3>Twitter Feeds</h3>
                                <div className="twitter-widget contuct">
                                    <div className="twitter-area">
                                        <div className="single-item">
                                            <div className="icon-holder">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                <h5><a href="#">@findhouses</a> all share them with me baby said inspet.</h5>
                                                <h4>about 5 days ago</h4>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-holder">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                <h5><a href="#">@findhouses</a> all share them with me baby said inspet.</h5>
                                                <h4>about 5 days ago</h4>
                                            </div>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-holder">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                <h5><a href="#">@findhouses</a> all share them with me baby said inspet.</h5>
                                                <h4>about 5 days ago</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="newsletters">
                                <h3>Newsletters</h3>
                                <p>Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to receive news in your inbox.</p>
                            </div>
                            <form className="bloq-email mailchimp form-inline" method="post">
                                <label htmlFor="subscribeEmail" className="error"></label>
                                <div className="email">
                                    <input type="email" id="subscribeEmail" name="EMAIL" placeholder="Enter Your Email" />
                                    <input type="submit" value="Subscribe" />
                                    <p className="subscription-success"></p>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="second-footer">
                <div className="container">
                    <p>2024 © Copyright - All Rights Reserved.</p>
                    <ul className="netsocials">
                        <li><Link to="https://www.facebook.com/profile.php?id=100093670877489"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link to="https://www.youtube.com/@tahanirealestate"><i className="fa fa-youtube" aria-hidden="true"></i></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer