import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Sencha() {
  return (
    <>
      <Container>
        <h1 className='top-heading'>GRUI by Sencha: High-performance, feature-rich<br/> grid for react applications</h1>
        <Row className='align-items-center'>
            <Col sm={8}>
                <p className='SenchaTitle'>Quick integration</p>
                <p className='SenchaTitle'>Easy customization</p>
                <p className='SenchaTitle'>Custom data loading</p>
                <p className='SenchaTitle'>Handles massive amount of data</p>
                <p className='SenchaTitle'>No additional plugins required</p>
                <p className='SenchaTitle'>Smaller footprint/payload than other grid solutions</p>
                <div className='SenchaButton'>
                    <Link to='/sign-up' className='btn-explore'>
                        <a className='btn-onliline-ex'>Start Trial</a>
                    </Link>
                    <Link to='/sign-up' className='btn-download'>
                        <a className='btn-onliline-ex'>Open Sandbox</a>
                    </Link>
                </div>
            </Col>
            <Col sm={4}>
                <img src={require('../images/banner_1.png')} width="445" height="409" />
            </Col>
        </Row>
      </Container>
      <Container>
        <h1 className='top-heading'>All the power of Sencha grid with the ease of React</h1>
        <p className='top-des'>Mission critical apps rely on the performance of their data grid components. With custom layouts and simple<br/> integration with React, GRUI by Sencha renders unparalleled performance to enterprise applications.</p>
      </Container>
      <div className='bg-dark-color'>
        <Container>
            <h1 className='top-heading'>GRUI – Sencha Grid for React User Interfaces</h1>
            <Row>
                <Col SM={2}></Col>
                <Col SM={8}><Link to='/'><img src={require('../images/Group-201.png')} width="936" height="311"/></Link></Col>
                <Col SM={2}></Col>
            </Row>
        </Container>
      </div>
        <Container className='KeyFeatureROW'>
            <h1 className='top-heading'>Key Features</h1>
            <Row className='align-items-center'>
                <Col sm={6}>
                    <p className='BlueHeading'>Virtual Columns</p>
                    <p className='blue-des'>Virtualized rendering isn’t just for rows with GRUI Configure an unlimited number of columns; GRUI will only render the visible columns</p>
                </Col>
                <Col sm={6}><img className='ProductCalloutIMG' src={require('../images/VirtualColumns.gif')} width="532" height="255" /></Col>
            </Row>
        </Container>
        <div className='bg-dark-color'>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6}><img className='ProductCalloutIMG' src={require('../images/VirtualColumns.gif')} width="532" height="255" /></Col>
                    <Col sm={6}>
                        <p className='BlueHeading'>Infinite Scrolling</p>
                        <p className='blue-des'>Virtualized rendering isn’t just for rows with GRUI Configure an unlimited number of columns; GRUI will only render the visible columns</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container className='KeyFeatureROW'>
            <Row className='align-items-center'>
                <Col sm={6}>
                    <p className='BlueHeading'>Slider Paging Toolbar</p>
                    <p className='blue-des'>Virtualized rendering isn’t just for rows with GRUI Configure an unlimited number of columns; GRUI will only render the visible columns</p>
                </Col>
                <Col sm={6}><img className='ProductCalloutIMG' src={require('../images/VirtualColumns.gif')} width="532" height="255" /></Col>
            </Row>
        </Container>
        <div className='bg-dark-color'>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6}><img className='ProductCalloutIMG' src={require('../images/VirtualColumns.gif')} width="532" height="255" /></Col>
                    <Col sm={6}>
                        <p className='BlueHeading'>Column Drag and Drop</p>
                        <p className='blue-des'>Virtualized rendering isn’t just for rows with GRUI Configure an unlimited number of columns; GRUI will only render the visible columns</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container className='KeyFeatureROW'>
            <Row className='align-items-center'>
                <Col sm={6}>
                    <p className='BlueHeading'>Column Editors</p>
                    <p className='blue-des'>Virtualized rendering isn’t just for rows with GRUI Configure an unlimited number of columns; GRUI will only render the visible columns</p>
                </Col>
                <Col sm={6}><img className='ProductCalloutIMG' src={require('../images/VirtualColumns.gif')} width="532" height="255" /></Col>
            </Row>
        </Container>
        <MDBContainer>
            <h1 className='top-heading'>GRUI Pricing – simple, transparent, per developer pricing for all of your products/projects</h1>
            <MDBRow className='PricingBoxRow'>
                <MDBCol sm={6} className='PriceBox' size='md'>
                    <p className='PriceBoxTitle'>FREE</p>
                    <ul>
                        <li>Unlimited end users</li>
                        <li>Unlmited products</li>
                        <li>Includes apps in production</li>
                        <li>Includes internal apps</li>
                        <li>Perpetual license</li>
                        <li><b>Attribution watermark required</b></li>
                        <li>12 months of updates & technical support</li>
                        <li>Optional maintenance – 70% discount</li>
                    </ul>
                    <Link to='/'>
                        <a className='TrialBtn'>Start Trial</a>
                    </Link>
                </MDBCol>
                <MDBCol sm={6} className='PriceBox' size='md'>
                    <p className='PriceBoxTitle'>$499</p>
                    <ul>
                        <li>Unlimited end users</li>
                        <li>Unlmited products</li>
                        <li>Includes apps in production</li>
                        <li>Includes internal apps</li>
                        <li>Perpetual license</li>
                        <li>Attribution watermark required</li>
                        <li>12 months of updates & technical support</li>
                        <li>Optional maintenance – 70% discount</li>
                    </ul>
                    <Link to='/'>
                        <a className='TrialBtn'>Start Trial</a>
                    </Link>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <Container>
            <Row className='align-items-center bottom-space'>
                <Col sm={2}></Col>
                <Col sm={6}><h2 className='top-heading'>Find a plan that's right for you!</h2></Col>
                <Col sm={2}>
                    <div className='img-inline-btn'>
                        <Link to='/'>
                        <a className='plan-btn'>See Our Plans</a>
                        </Link>
                    </div>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
    </>
  )
}

export default Sencha
