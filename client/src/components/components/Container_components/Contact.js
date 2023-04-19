import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="Contact" style={{background: "#fff"}}>
            <h3 className="Contact_title">Tell me about new product features as they come out</h3>
            <div className="Contact_modal">
                <div className="Contact_box">
                    <div className="Contact_left">
                        <input type="email" className="Contact_email" placeholder="Email"></input>
                        <span className="Contact_policy">By submitting this form, I agree to the 
                            <a className="Contact_link" href="https://www.jetbrains.com/legal/docs/privacy/privacy/">Akatsuki Privacy Policy</a>
                        </span>
                    </div>
                    <div className="Contact_right">
                        <button className="Contact_submit">Submit</button>
                        <a className="Contact_sample" href="https://info.jetbrains.com/rs/426-QVD-114/images/IDEA-EN-sample.html?_gl=1*1kwqc5b*_ga*Njk3MDgwNjIzLjE2NTk4OTI4MzU.*_ga_9J976DJZ68*MTY3OTIyMjkwMi4yMi4xLjE2NzkyMjM5ODEuNTkuMC4w&_ga=2.243840769.525838083.1679038808-697080623.1659892835">View sample newsletter</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;