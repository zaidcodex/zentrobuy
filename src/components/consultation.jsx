import React from 'react'
import './form.css'

export default function Consultation() {
    return (
        <div>
            <h1 className='welcome-header text-center mb-4'>Request Consultation</h1>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div>
                            <div className="row no-gutters justify-content-center">
                                <div className="col-md-6 mainform align-items-stretch">
                                    <div className="contact-wrap mainest w-100 p-4">
                                        <h3 className="mb-4">Request Free Consultation</h3>
                                        <div id="form-message-warning" className="mb-4"></div>
                                        <div id="form-message-success" className="mb-4">
                                            Your message was sent, thank you!
                                        </div>
                                        <form className="contactForm">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="theform-control" name="name" id="name"
                                                            placeholder="Enter Your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="email" className="theform-control" name="email" id="email"
                                                            placeholder="Enter Your Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="theform-control" name="subject" id="subject"
                                                            placeholder="Enter your phone number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea name="message" className="theform-control" id="message" cols="30"
                                                            rows="6" placeholder="Some Description"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 my-3">
                                                    <div className="form-group">
                                                        <div className='d-flex justify-content-center'>
                                                        <input type="submit" value="Send Request" className="btn oner btn-primary" />
                                                        </div>
                                                        <div className="submitting"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}