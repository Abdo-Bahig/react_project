import {React} from "react";
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
function Subscribe(){
    return(
        <section className="subscribe-sec">
                <Row className="sub-box">
                    <Col md={6} sm={12}>
                        <h3>
                            See My Projects At Once & Leave Here Your E-mail Address.
                        </h3>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="email-box">
                            <input type="text" placeholder="E-mail Address"/>
                            <button type="button">Submit</button>
                        </div>
                    </Col>
                </Row>
        </section>
    )
}
export default Subscribe