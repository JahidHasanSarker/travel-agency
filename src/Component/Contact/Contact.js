import React from 'react';
import './Contact.css';
import img from '../../rocket_contact.png';

const Contact = () => {
    return (
        <div className="contact-bg pb-5" id="contact">
          <div>
          <div className="container contact-form">
            <div className="contact-image">
                <img src={img} alt="rocket_contact"/>
            </div>
            <form>
                <h3>Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control form-size" placeholder="Your Message *" ></textarea>
                        </div>
                    </div>
                </div>
            </form>
          </div>
          </div>
        </div>
    );
};

export default Contact;