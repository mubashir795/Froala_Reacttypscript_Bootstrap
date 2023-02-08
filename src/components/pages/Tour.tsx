import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Tour() {
  return (
    <>
      <Container className='bg-dark-color TopSpace'>
        <Row>
            <Col sm={6}>
                <h1 className='top-heading'>Try Froala Editor</h1>
                <p className='top-des'>Start your trial today and receive 30 days of FREE technical support to get you started.</p>
                <p className='top-des strong'>Ranked Top WYSIWYG Editor 3 years in a row!</p>
                <Row>
                    <Col sm={3}><img src={require('../images/G2-Spring.png')} /></Col>
                    <Col sm={3}><img src={require('../images/G2-Spring.png')} /></Col>
                    <Col sm={3}><img src={require('../images/G2-Spring.png')} /></Col>
                    <Col sm={3}><img src={require('../images/G2-Spring.png')} /></Col>
                </Row>
                <p className='top-des'>Here are some benefits you'll get from using Froala WYSIWYG Editor Trial:</p>
                <ul className='download-quick-links'>
                    <li>30 days of Technical Support</li>
                    <li>Supports 15+ Tech Stacks</li>
                    <li>Easy to Extend</li>
                    <li>Out of the Box Plugins</li>
                </ul>
                <p className='top-des strong BlueColor'>Wait no more - just fill out the form to start using the Froala Editor for FREE!</p>
            </Col>
            <Col sm={6}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Control type="name" placeholder="First name" />
                        <Form.Control type="name" placeholder="Last name" />
                        <Form.Select>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                        </Form.Select>
                        <p>Note: By registering, you confirm that you agree to the processing of your personal data by Froala, Inc. - Froala as described in the Privacy Statement. Froala, Inc. - Froala is part of the Idera group and may share your information with its parent company Idera, Inc., and its affiliates. For further details on how your data is used, stored, and shared, please review our Privacy Statement.</p>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
      </Container>
        <Container>
            <p className='text-small'><a  href="#">Customize before downloading</a> | <a  href="#">Quick Start Guide</a></p>
            <p className='text-small top-space'>Please read the<a  href="#">License Agreement</a> before using our rich text editor</p>
        </Container>
        <Container className='bg-dark-color TopSpace'>
            <h1 className='top-heading'>Thousands Have Chosen Froala</h1>
            <Row className='align-items-center'>
                <Col sm={6} className=''>
                <p className='TextDes'>I just want to complement you all with an excellent piece of code! There are plenty free WYSIWYG editors around, but I just love Froala! It is easy to implement, has enough features, well coded and updated when needed. Good job you all!</p>
                <p className='TextDes'>— Dave Reedijk</p>
                </Col>
                <Col sm={6} className=''>
                    <p className='TextDes'>We love all the recent updates. One of our customer JUST ASKED about a video upload option and we look like rockstars 🙂 Amazing work! Your happy customer,</p>
                    <p className='TextDes'>— Marybeth Alexander, CEO at</p>
                </Col>
            </Row>
            <div className='plan-btn-style'>
                <Link to='/'>
                    <a className='plan-btn'>See More</a>
                </Link>
            </div>
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
    </>
  )
}

export default Tour
