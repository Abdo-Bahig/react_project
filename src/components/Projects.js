import {React} from "react";
import {Col, Nav,Tab,Row, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Link , NavLink, Outlet} from "react-router-dom";
function Projects(){
    return(
        <section className="projects-sec" id="projects">
            <Container>

                <Row>
                    <Col className="heading-sec">
                        <h1>Projects</h1>
                        <p>You Can See My Works Here</p>
                    </Col>
                </Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills" className="projects-tabs">
                        <Nav.Item>
                            <Nav.Link><NavLink to="/">Tab 1</NavLink></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link to="contact">Tab 2</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link to="desc">Tab 3</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Outlet/>
                </Tab.Container>
            </Container>
        </section>
    )
}
export default Projects