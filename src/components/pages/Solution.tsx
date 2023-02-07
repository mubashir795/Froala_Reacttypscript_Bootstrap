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
            <MDBRow className='align-items-center'>
                <MDBCol sm={4} size='md'>
                    <img src={require('../images/Learning-Icon.png')} width="60" height="60"/>
                </MDBCol>
                <MDBCol sm={4} size='md'>
                    <img src={require('../images/Learning-Icon.png')} width="60" height="60"/>
                </MDBCol>
                <MDBCol sm={4} size='md'>
                    <img src={require('../images/Learning-Icon.png')} width="60" height="60"/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>
  )
}

export default Solution
