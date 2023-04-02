import {React} from "react";
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slider1 from "../imgs/meter1.svg"
import slider2 from "../imgs/meter2.svg"
import slider3 from "../imgs/meter3.svg"
import skillsColor from "../imgs/color-sharp.png"
function Skills(){
    const responsive = {
    superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
    },
    desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    },
    tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
    },
    mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
    }
    };
    return(
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col xs={12} className="skills-box">
                        <h1>Skills</h1>
                        <p>You Can See My Skills Here</p>
                        <Carousel responsive={responsive} draggable={true} infinite={true} swipeable={true}>
                            <div className="item">
                                <img src={slider1} alt="img"/>
                                <h5>FrontEnd Development</h5>
                            </div>
                            <div className="item">
                                <img src={slider2} alt="img"/>
                                <h5>BackEnd Development</h5>
                            </div>
                            <div className="item">
                                <img src={slider3} alt="img"/>
                                <h5>JS</h5>
                            </div>
                            <div className="item">
                                <img src={slider1} alt="img"/>
                                <h5>bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={slider2} alt="img"/>
                                <h5>React</h5>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Skills