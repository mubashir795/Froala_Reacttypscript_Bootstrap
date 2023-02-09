import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion';

function Pricing() {
  return (
    <>
        <Container>
            <h1 className='top-heading'>Froala Editor Plans</h1>
            <p className='top-des strong'>Level up your rich text editing today with the plan that best suits your needs</p>
        </Container>
        <Container>
            <Row className='align-items-center PricingRow'>
                <Col></Col>
                <Col sm={2} className='BgGrey'>
                    <p className='BoldText'>Compare Plans</p>
                    <p className='basic_plan_conatiner'>&nbsp;</p>
                    <p className='basic_plan_type'>&nbsp;</p>
                    <p className='basic_plan_type'>&nbsp;</p>
                    <p className='basic_plan_type'>&nbsp;</p>
                    <p className='basic_plan_type'>&nbsp;</p>
                    <p className='text-small-des'>&nbsp;</p>
                    <p className='text-small-des'>&nbsp;</p>
                    
                    
                    <div className='btn-group-hide'>
                        &nbsp;
                    </div>
                    <p className='plan-text'>Advantages</p>
                    <p className='tippy-content'>License duration</p>
                    <p className='tippy-content'>Monthly Active Users</p>
                    <p className='tippy-content'>Number of Products</p>
                    <p className='tippy-content'>Number of Domains</p>
                    <p className='tippy-content'>Activation Key</p>
                    <p className='tippy-content'>Free Updates</p>
                    <p className='tippy-content'>Support</p>
                    <p className='tippy-content'>Self-Hosted</p>
                    <p className='tippy-content'>Watermark Free</p>
                    <p className='plan-text'>Usage</p>
                    <p className='tippy-content'>Unminified Source Code</p>
                    <p className='tippy-content'>SaaS / Subscription</p>
                    <p className='tippy-content'>Mobile Apps</p>
                    <p className='tippy-content'>Internal Apps</p>
                    <p className='tippy-content'>Redistribution/OEM</p>
                </Col>
                <Col sm={2} className='BgWhiteC'>
                    <p className='MediumText'>Free Trial</p>
                    <p className='PricingText'>$0</p>
                    <p className='PricingYear'>/year</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p className='TextSmallDes'>Perfect to test drive the editor with no commitments</p>
                    <p>&nbsp;</p>
                    <div className='btn-group'>
                        <Link to='/'>
                            <a className='BtnPricePlan'>Start Trial</a>
                        </Link>
                    </div>
                    <p className='plan-text'>&nbsp;</p>
                    <p className='highlight-plan'>―</p>
                    <p className='highlight-plan'>UNLIMITED</p>
                    <p className='highlight-plan'>1</p>
                    <p className='highlight-plan'>1</p>
                    <p className='highlight-plan'>―</p>
                    <p className='highlight-plan'>―</p>
                    <p className='highlight-plan'>Community only</p>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <p className='highlight-plan'>―</p>
                    <p className='plan-text'>&nbsp;</p>
                    <p className='highlight-plan'>―</p>
                    <p className='highlight-plan'>―</p>
                    <p className='highlight-plan'>―</p>
                    <p className='highlight-plan'>―</p>
                    <p className='highlight-plan'>―</p>
                </Col>
                <Col sm={2} className='BgSky'>
                    <p className='MediumText'>Basic</p>
                    <p className='PricingText'>$0</p>
                    <p className='PricingYear'>/year</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p className='TextSmallDes'>Perfect to test drive the editor with no commitments</p>
                    <p>&nbsp;</p>
                    <div className='btn-group'>
                        <Link to='/'>
                            <a className='btn-price-plan'>Start Trial</a>
                        </Link>
                    </div>
                    <p className='plan-text'>&nbsp;</p>
                    <p className='highlight-plan'>12 months</p>
                    <p className='highlight-plan'>UNLIMITED</p>
                    <p className='highlight-plan'>1</p>
                    <p className='highlight-plan'>3</p>
                    <p className='highlight-plan'>Wildcard</p>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <p className='highlight-plan'>Community only</p>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <p className='plan-text'>&nbsp;</p>
                    <p className='highlight-plan'>―</p>
                    <p className='highlight-plan'>―</p>
                    <p className='highlight-plan'>―</p>
                    <p className='highlight-plan'>―</p>
                    <p className='highlight-plan'>―</p>
                </Col>
                <Col sm={2} className='BgWhiteC'>
                    <p className='MediumText'>Professional</p>
                    <p className='PricingText'>$0</p>
                    <p className='PricingYear'>/year</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p className='TextSmallDes'>Perfect to test drive the editor with no commitments</p>
                    <p>&nbsp;</p>
                    <div className='btn-group'>
                        <Link to='/'>
                            <a className='btn-price-plan'>Start Trial</a>
                        </Link>
                    </div>
                    <p className='plan-text'>&nbsp;</p>
                    <p className='highlight-plan'>12 months</p>
                    <p className='highlight-plan'>UNLIMITED</p>
                    <p className='highlight-plan'>1</p>
                    <p className='highlight-plan'>UNLIMITED</p>
                    <p className='highlight-plan'>Wildcard</p>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <p className='highlight-plan'>Included</p>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <p className='plan-text'>&nbsp;</p>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <p className='highlight-plan'>―</p>
                </Col>
                <Col sm={2} className='BgSky'>
                    <p className='MediumText'>Enterprise</p>
                    <p className='PricingText'>$0</p>
                    <p className='PricingYear'>/year</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p className='TextSmallDes'>Perfect to test drive the editor with no commitments</p>
                    <p>&nbsp;</p>
                    <div className='btn-group'>
                        <Link to='/'>
                            <a className='btn-price-plan'>Start Trial</a>
                        </Link>
                    </div>
                    <p className='plan-text'>&nbsp;</p>
                    <p className='highlight-plan'>12 months</p>
                    <p className='highlight-plan'>UNLIMITED</p>
                    <p className='highlight-plan'>UNLIMITED</p>
                    <p className='highlight-plan'>UNLIMITED</p>
                    <p className='highlight-plan'>Wildcard</p>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <p className='highlight-plan'>Included</p>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <p className='plan-text'>&nbsp;</p>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                    <div className='PriceIcon'>
                        <FaCheck/>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        <Container>
            <h1 className='top-heading'>Powering web editing for customers ranging from startups to the world’s largest companies.</h1>
        </Container>
        <Container>
            <Row>
                <Col><img src={require('../images/samsung.png')} width="75" height="25"/></Col>
                <Col><img src={require('../images/apple.png')} width="25" height="25"/></Col>
                <Col><img src={require('../images/ibm.png')} width="62" height="25"/></Col>
                <Col><img src={require('../images/amazon.png')} width="124" height="25"/></Col>
                <Col><img src={require('../images/ebay.png')} width="62" height="25"/></Col>
                <Col><img src={require('../images/intel.png')} width="38" height="25"/></Col>
                <Col><img src={require('../images/netflix.png')} width="88" height="25"/></Col>
                <Col><img src={require('../images/cisco.png')} width="44" height="25"/></Col>
                <Col><img src={require('../images/thomson.png')} width="107" height="25"/></Col>
            </Row>
        </Container>
        {/* <Container>
            <Row className='align-items-center'>
                <Col sm={3}></Col>
                <Col sm={6}>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={2}>
                            <img src={require('../images/rocket-1.png')} width="117" height="117"/>
                        </Col>
                        <Col sm={8}>
                            <div className='plan-img-text'>
                                <h1 className='regular-head'>Ignition discount</h1>
                                <p className='regular-text'>We support new businesses with a 35% discount for the Pro & Enterprise plans. If you have under 50 monthly active users request a discount</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={3}></Col>
            </Row>
        </Container> */}
        <Container>
            <h1 className='top-heading'>FAQ</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is an HTML Editor?</Accordion.Header>
                    <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Can I use the Froala online HTML Editor for free?</Accordion.Header>
                    <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Can I edit and test HTML files online?</Accordion.Header>
                    <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What’s the difference between Froala WYSIWYG Editor vs Online HTML Editor?</Accordion.Header>
                    <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Which programming languages and frameworks does Froala Editor support?</Accordion.Header>
                    <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    </>
  )
}

export default Pricing
