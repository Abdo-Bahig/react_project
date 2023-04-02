import {React} from "react";
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import Subscribe from "./Subscribe";
import '../App.css'
function Footer(){
    return(
        <section className="footer-sec">
            <Container>
                <Row>
                    <Subscribe/>
                </Row>
                <Row className="footer-cont">
                    <Col  className="logo"><a href="#">LOGO</a></Col>
                    <Col  className="footer-icons">
                        <div className="header-icon">
                                <a href="#"><span><FontAwesomeIcon icon={faLinkedinIn}/></span></a>
                                <a href="#"><span><FontAwesomeIcon icon={faFacebookF}/></span></a>
                                <a href="#"><span><FontAwesomeIcon icon={faInstagram}/></span></a>
                        </div>           
                        <p>--Copyrights 2023-- All Rights Reserved Here By Khaled Abd El-Mohsen</p>        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Footer