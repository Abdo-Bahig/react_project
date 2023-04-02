import {React} from "react";
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import 'animate.css';
import contact from "../imgs/contact-img.svg"
import TrackVisibility from "react-on-screen";
function Contact(){
    return(
        <TrackVisibility>
        {({isVisible})=>
        <section className={isVisible?"contact-sec animate__animated animate__fadeInUp":"contact-sec"}>
            <Container>
                <Row className="contact-bx">
                    <Col md={6} sm={12}>
                        <img src={contact} alt="img" className="contact-img"></img>
                    </Col>

                    <Col>
                        <h2>Get In Touch</h2>
                        <Row className="contact-info">
                            <Col md={6} sm={12} className="p-1">
                                <input type="text" value="" placeholder="First Name"/>
                            </Col>
                            <Col md={6} sm={12} className="p-1">
                                <input type="text" value="" placeholder="Last Name"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} sm={12} className="p-1">
                                <input type="email" value="" placeholder="Email"/>
                            </Col>
                            <Col md={6} sm={12} className="p-1">
                                <input type="tel" value="" placeholder="Phone"/>
                            </Col>
                        </Row>
                        <Row>
                        <Col sm={12} className="p-1">
                            <textarea rows={7} type="text" value="" placeholder="Type Your Message"/>
                            <button>Send</button>
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>}
        </TrackVisibility>
    )
}
export default Contact