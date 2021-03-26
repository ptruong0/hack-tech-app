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
    url += "&email=" + form.email.value;
    url += "&funfact=" + form.funFact.value;
    axios.get(url)
    .then((res) => {
        console.log(res);
        successToast();
        form.reset();
    }).catch(err => console.log(err));
}

const successToast = () => {
    toast.success("Form submitted successfully!", {
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