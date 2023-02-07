import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Customers() {
  return (
    <>
        <Container>
            <h1 className='top-heading'>Successful Customers</h1>
            <p className='top-des strong'>Used by customers ranging from small businesses to Fortune 100</p>
        </Container>
        <Container className='TopSpace'>
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
        <Container>
            <Row className='align-items-center'>
                <Col sm={3}></Col>
                <Col sm={6} className='GreyBox'>
                    <img src={require('../images/unbounce-square.png')} width="44" height="44"/>
                    <p className='TextDes'>"Thanks for making web based text editing great again."</p>
                    <div className='btn-onbounce'>
                        <Link to='/'>
                            <a className='plan-btn'>Read Story</a>
                        </Link>
                    </div>
                </Col>
                <Col sm={3}></Col>
            </Row>
        </Container>
        <Container>
            <h1 className='top-heading'>Discover how customers succeed.</h1>
        </Container>
        <MDBContainer>
            <MDBRow className='align-items-center'>
                <MDBCol sm={6} className='GreyBox' size='md'>
                    <img src={require('../images/close.io.jpg')} width="56" height="56"/>
                    <p className='TextTitle'>Don't reinvent the wheel.</p>
                    <p className='TextDes'>Close.io deals with everyday seamless emails and Froala WYSIWYG HTML editor is key in making that happen.</p>
                    <div className='btn-onbounce'>
                        <Link to='/'>
                            <a className='plan-btn'>Read Story</a>
                        </Link>
                    </div>
                </MDBCol>
                <MDBCol sm={6} className='GreyBox' size='md'>
                    <img src={require('../images/artstation-square.png')} width="56" height="56"/>
                    <p className='TextTitle'>Simple to extend.</p>
                    <p className='TextDes'>ArtStation needed a rich text editor for media heavy content and Froala is the one to meet their expectations.</p>
                    <div className='btn-onbounce'>
                        <Link to='/'>
                            <a className='plan-btn'>Read Story</a>
                        </Link>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <div className='bg-dark-color'>
            <Container>
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
                        <a className='plan-btn'>See More Customers</a>
                    </Link>
                </div>
            </Container>
        </div>
        <Container>
            <h1 className='top-heading'>Thousands Have Chosen Froala</h1>
            <Row className='align-items-center'>
                <Col sm={6} className=''>
                    <img src={require('../images/philfreo.jpeg')} width="66" height="66"/>
                    <p className='TextDes'>I just want to complement you all with an excellent piece of code! There are plenty free WYSIWYG editors around, but I just love Froala! It is easy to implement, has enough features, well coded and updated when needed. Good job you all!</p>
                    <p className='TextDes'>— Dave Reedijk</p>
                </Col>
                <Col sm={6} className=''>
                    <img src={require('../images/xtranophilist.jpeg')} width="66" height="66"/>
                    <p className='TextDes'>We love all the recent updates. One of our customer JUST ASKED about a video upload option and we look like rockstars 🙂 Amazing work! Your happy customer,</p>
                    <p className='TextDes'>— Marybeth Alexander, CEO at</p>
                </Col>
            </Row>
            <div className='plan-btn-style'>
                <Link to='/'>
                    <a className='plan-btn'>See More Tweets</a>
                </Link>
            </div>
        </Container>
    </>
  )
}

export default Customers
