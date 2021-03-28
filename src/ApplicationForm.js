import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';

import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const endpoint = "https://hack-tech-app-endpoint.herokuapp.com/";

const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.querySelector("#app-form");
    var url = endpoint + "test?";
    url += "name=" + form.name.value;
    if (validEmail(form.email.value)) {
        url += "&email=" + form.email.value;
        url += "&funfact=" + form.funFact.value;  
        axios.get(url)
            .then((res) => {
                console.log(res);
                successToast();
                form.reset();
            }).catch((err) => {
                console.log(err.message);
                failureToast(err.message);
            });
    }
}

const validEmail = (email) => {
    const atPosition = email.indexOf("@");
    if (atPosition != -1) {
        const periodPosition = email.indexOf(".");
        if (periodPosition != -1) {
            if (periodPosition < atPosition) {
                failureToast("Email must contain a valid url after the @");
            } else {
                return true;
            }
        } else{
            failureToast("Email must contain a valid url");
        }
    } else {
        failureToast("Email must contain @");
    }
    return false;
}

const successToast = () => {
    toast.success("Form submitted successfully!", {
        position: "bottom-center"
    });
}

const failureToast = (errorMsg) => {
    toast.error("Form submission failed: " + errorMsg, {
        position: "bottom-center"
    });
}

const ApplicationForm = () => {
    return (
        <div>
            <Form id="app-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Hack UCI Application</h2>
                <Col className="form-col">
                    <Form.Group className="form-group">
                        <Form.Label className="form-label">
                            Name
                        </Form.Label>
                        <br />
                        <Form.Control type="text" placeholder="Name" name="name" className="form-input" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="form-label">
                            Email
                        </Form.Label>
                        <br />
                        <Form.Control type="email" placeholder="Email" name="email" className="form-input" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="form-label">
                            Fun Fact
                    </Form.Label>
                        <br />
                        <Form.Control as="textarea" placeholder="Fun Fact About You :)" name="funFact" className="form-input form-fun-fact" required />
                    </Form.Group>
                    <Button type="submit" variant="primary" className="form-btn" >
                        Submit
                </Button>
                </Col>
            </Form>
            <ToastContainer />
        </div>
    );
}

export default ApplicationForm;