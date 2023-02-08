import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Solution() {
  return (
    <>
        <div className='BgImage'>
            <Container>
                <h1 className='WhiteTextHeading'>The Fastest and Most Powerful WYSIWYG HTML Editor.</h1>
                <p className='WhiteTextDes'>Design Beautiful Things, Innovate Creation,<br/> Collaborate Optimize and Delight yours Customers</p>
                <div className='BgCenterIm'>
                    <img src={require('../images/center-img.png')} width="768" height="273"/>
                </div>
            </Container>
        </div>
        <MDBContainer>
            <MDBRow className='align-items-center SolutionRow'>
                <MDBCol sm={4} className='SolutionBox' size='md'>
                    <img src={require('../images/Learning-Icon.png')} width="60" height="60"/>
                    <h3 className='SolutionBoxTilte'>Learning and<br/>Training<br/>Management<br/>System</h3>
                    <p className='SolutionBoxDes'>Explore</p>
                </MDBCol>
                <MDBCol sm={4} className='SolutionBox' size='md'>
                    <img src={require('../images/CRM-Icon.png')} width="60" height="60"/>
                    <h3 className='SolutionBoxTilte'>Learning and<br/>Training<br/>Management<br/>System</h3>
                    <p className='SolutionBoxDes'>Explore</p>
                </MDBCol>
                <MDBCol sm={4} className='SolutionBox' size='md'>
                    <img src={require('../images/WebCRM-icon.png')} width="60" height="60"/>
                    <h3 className='SolutionBoxTilte'>Learning and<br/>Training<br/>Management<br/>System</h3>
                    <p className='SolutionBoxDes'>Explore</p>
                </MDBCol>
            </MDBRow>
            <MDBRow className='align-items-center'>
                <MDBCol sm={4} className='SolutionBox' size='md'>
                    <img src={require('../images/Learning-Icon.png')} width="60" height="60"/>
                    <h3 className='SolutionBoxTilte'>Learning and<br/>Training<br/>Management<br/>System</h3>
                    <p className='SolutionBoxDes'>Explore</p>
                </MDBCol>
                <MDBCol sm={4} className='SolutionBox' size='md'>
                    <img src={require('../images/CRM-Icon.png')} width="60" height="60"/>
                    <h3 className='SolutionBoxTilte'>Learning and<br/>Training<br/>Management<br/>System</h3>
                    <p className='SolutionBoxDes'>Explore</p>
                </MDBCol>
                <MDBCol sm={4} className='SolutionBox' size='md'>
                    <img src={require('../images/WebCRM-icon.png')} width="60" height="60"/>
                    <h3 className='SolutionBoxTilte'>Learning and<br/>Training<br/>Management<br/>System</h3>
                    <p className='SolutionBoxDes'>Explore</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <Container>
            <h1 className='top-heading BlueTitle'>Froala Editor Puts the Power of Website<br/>Creation in Your Hands.</h1>
            <div className='plan-btn-style'>
                <Link to='/'>
                    <a className='plan-btn'>Download</a>
                </Link>
            </div>
        </Container>
        <div className='BGBlue'>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={6}>
                        <h1 className='WhiteTextHeading'>Don’t see the right solution?</h1>
                        <div className='plan-btn-style'>
                            <Link to='/'>
                                <a className='WhiteBtn'>Download</a>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <img src={require('../images/Screenshot-20.png')} width="300" height="348"/>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Solution
