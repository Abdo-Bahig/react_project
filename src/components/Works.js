import {React} from "react";
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import project1 from "../imgs/project-img1.png"
import project2 from "../imgs/project-img2.png"
import project3 from "../imgs/project-img3.png"
function Works(){
    const projectsData=[
        {
            img:project1,
            title:"Business Startup",
            desc:"Design & Development",
        },
        {
            img:project2,
            title:"Business Startup",
            desc:"Design & Development",
        },
        {
            img:project3,
            title:"Business Startup",
            desc:"Design & Development",
        },
        {
            img:project1,
            title:"Business Startup",
            desc:"Design & Development",
        },
        {
            img:project2,
            title:"Business Startup",
            desc:"Design & Development",
        },
        {
            img:project3,
            title:"Business Startup",
            desc:"Design & Development",
        },
    ]
    return(
        <section className="works-sec">
            <Container>
                <Row className="projects-Cont">
                    {projectsData.map((item)=>{
                        return(
                            <Col sm={6} md={4} className="item">
                                <div className="imgbx"><img src={item.img} alt="img"/></div>
                                <div className="item-text">
                                    <h3>{item.title}</h3> 
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}
export default Works