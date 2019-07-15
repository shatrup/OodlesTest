import React from "react";
import PropTypes from "prop-types";

class ContactSection extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            company: "",
            subject: "",
            message: ""
        };
    }

    nameChange = evt => {
        this.setState({ name: evt.target.value });
    };
    emailChange = evt => {
        this.setState({ email: evt.target.value });
    };
    companyChange = evt => {
        this.setState({ company: evt.target.value });
    };
    subjectChange = evt => {
        this.setState({ subject: evt.target.value });
    };
    messageChange = evt => {
        this.setState({ message: evt.target.value });
    };

    canBeSubmitted() {
        const { name, email, company, subject, message } = this.state;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regCom = /^[a-zA-Z0-9]/;

        return (
            name.length > 3 &&
            name.length < 32 &&
            re.test(String(email).toLowerCase()) &&
            regCom.test(company) &&
            subject.length <= 15 &&
            message.length > 30 && 
            message.length < 150
        );
    }

    handleSubmit = (evt) => {
        // evt.preventDefault();
        if (!this.canBeSubmitted()) {
            alert("Passed");
            return;
        }
        if (this.handleSubmit()) {
            alert("Thank you for Contacting us. We will get back to you soon.");
        }
        else {
            alert("Form has errors.");
        }
        // actual submit logic...
    };

    render() {
        
        const isEnabled = this.canBeSubmitted();
        return (
            <div className="container contact-us-main-container" className="contactusBackground">
                <section>
                    <div className="row" id="contactus">
                        <div className="col-md-6 shadowEffect" style={{color:"white"}}>
                            <p>New to The Blockchain Industry?</p>
                            <p>Or got any queries?</p>
                            <p>We are just one click away!</p>
                        </div>
                        <div className="col-md-6 contact_form" style={{backgroundColor:"white",paddingTop:30}}>
                            <div className="page-header" id="is" >
                                <h2 className="text-center">Contact Us</h2>
                                <p className="text-center">How can we help you?</p>
                            </div>
                            <form>                         
                                <div className="form-group">
                                        <input
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.nameChange}
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            required
                                        />
                                </div>
                                <div className="form-group">
                                        <input
                                            type="email"
                                            
                                        value={this.state.email}
                                        onChange={this.emailChange}
                                            className="form-control"
                                            id="userEmail"
                                            name="cuemail"
                                            placeholder="Your email address"
                                            required
                                        />
                                </div>
                                <div className="form-group">
                                        <input
                                            type="text"                                            
                                            value={this.state.company}
                                            onChange={this.companyChange}
                                            className="form-control"
                                            id="cusubject"
                                            name="cusubject"
                                            placeholder="Company"
                                            required
                                        />
                                </div>
                                <div className="form-group">
                                        <input
                                            type="text"                                            
                                            value={this.state.subject}
                                            onChange={this.subjectChange}
                                            className="form-control"
                                            id="cusubject"
                                            name="cusubject"
                                            placeholder="Your Subjects "
                                            required
                                        />
                                </div>
                                <div className="form-group">
                                        <textarea
                                            name="usermessage"                                            
                                            value={this.state.message}
                                            onChange={this.messageChange}
                                            id="usermessage"
                                            className="form-control"
                                            cols="10"
                                            rows="4"
                                            placeholder="Your Message...."
                                            required
                                        />
                                </div>
                                <div className="form-group">
                                    <div className="text-center">
                                        <button disabled={!isEnabled}
                                            type="submit"
                                            className="btn btn-primary"
                                            value="Submit" 
                                            onClick={this.handleSubmit}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

class Contactus extends React.Component {

    componentDidMount() {
        console.log("ContactPage::componentDidMount");
    }
    render() {

        return (
            <ContactSection />
        );
    }
}

Contactus.propTypes = {
    title: PropTypes.string
};

export default Contactus;