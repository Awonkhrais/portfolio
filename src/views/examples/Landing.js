/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/aboutmepic.jpg";
import carshop from "assets/img/theme/elite car.PNG";
import busmall from "assets/img/theme/busmall.jpg";
import horned from "assets/img/theme/horned.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Awon Khrais Portfolio{" "}
                        <span>Learning Never Stops!</span>
                      </h1>
                      <p className="lead text-white">
                        There's no limit what can be accomplished with a little technology.
                        In the future, AI will become a part of our lives.So what achievements technology will do and what next! You can Never guess .
                      </p>
                      <p style={{ color: "white" }}>Check out some of my projects below!</p>
                      <div className="btn-wrapper">
                        {/* <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button> */}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div> */}
                          <CardImg
                            alt="..."
                            src={horned}
                            top

                          />

                          <h6 className="text-primary text-uppercase">
                            GALLERY OF HORNS
                          </h6>
                          <p className="description mt-3">
                            A React app that displays different horned animals,
                            allowing the user to filter based on the number of horns.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              JAVASCRIPT
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              React Bootstrap
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://galleryofhornss.netlify.app/"
                          // onClick={e => e.preventDefault()}
                          >
                            VIEW SITE
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div> */}
                          <CardImg
                            alt="..."
                            src={carshop}
                            top

                          />
                          <h6 className="text-success text-uppercase">
                            Car Delaer-Shop
                          </h6>
                          <p className="description mt-3">
                            Attractive car shop website
                            implemented to simplify many process : selling , buying and renting in a very interesing steps.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JAVASCRIPT
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://car-dealer-shop.github.io/Car-Shop/"
                            // onClick={e => e.preventDefault()}
                          >
                            VIEW SITE
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div> */}
                          <CardImg
                            alt="..."
                            src={busmall}
                            top

                          />
                          <h6 className="text-warning text-uppercase">
                            BUS MALL

                          </h6>
                          <p className="description mt-3">
                            A website that displays images randomly, allowing the user to vote on their favorite from each round. After 25 rounds,
                            their favorites are displayed using a graph.
                          </p>

                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JAVASCRIPT
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://bussmall.netlify.app/"
                            // onClick={e => e.preventDefault()}
                          >
                            VIEW SITE
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0" style={{ width: '30rem', height: '50rem' }}>
                    <CardImg
                      alt="..."
                      src={cardImg}
                      top

                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Software Developer
                      </h4>

                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="fa fa-user" />
                    </div>
                    <h3>About Me</h3>
                    <p className="lead">
                      Certifited from Code Fellows in Software development ,skilled in HTML,CSS,JavaScript as well as React.JS.
                    </p>

                    <Button
                      className="mt-4"
                      color="primary"
                      href="https://drive.google.com/file/d/1lh4B3kwWI2wxcWjmEQSfSeGMAq5MkaXM/view?usp=sharing"
                      target="_blank"
                    // onClick={e => e.preventDefault()}
                    >
                      My CV
                    </Button>
                    <br></br>
                    <br></br>

                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="https://www.linkedin.com/in/awonkhrais/"
                    // onClick={e => e.preventDefault()}
                    >
                      Let's stay connected.
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
