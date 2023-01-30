import React from 'react'
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Footer() {
    return (
        <div className='footer-bg'>
            <Container>
                <Row>
                    <Col sm={3}>
                    <div className='footer-href-items'>
                        <p>WYSIWYG EDITOR</p>
                        <div className='mx-auto mb-4'>
                            <a href='/'>Overview</a><br></br>
                            <a href='/'>Features</a><br></br>
                            <a href='/'>Pricing</a><br></br>
                            <a href='/'>Download</a><br></br>
                            <a href='/'>Examples</a><br></br>
                            <a href='/'>FAQ</a><br></br>
                            <a href='/'>solutions</a><br></br>
                            <a href='/'>Legal</a>
                        </div>
                    </div>
                    </Col>
                    <Col sm={3}>
                    <div className='footer-href-items'>
                        <p>FREE TOOLS</p>
                        <div className='mx-auto mb-4'>
                            <a href='/'>Design Blocks</a><br></br>
                            <a href='/'>Online HTML Editor</a><br></br>
                            <a href='/'>Pages</a><br></br>
                            <a href='/'>Image Uploader</a><br></br>
                            <a href='/'>WebTestIt</a>
                        </div>
                    </div>
                    </Col>
                    <Col sm={3}>
                    <div className='footer-href-items'>
                        <p>Resource</p>
                        <div className='mx-auto mb-4'>
                            <a href='/'>React Grid</a><br></br>
                            <a href='/'>Docs</a><br></br>
                            <a href='/'>Quick Start</a><br></br>
                            <a href='/'>Blog</a><br></br>
                            <a href='/'>Support</a><br></br>
                            <a href='/'>Contact Us</a><br></br>
                            <a href='/'>Case Studies</a><br></br>
                            <a href='/'>Customizer</a>
                        </div>
                    </div>
                    </Col>
                    <Col sm={3}>
                    <div className='footer-href-items'>
                        <p>Get In Touch</p>
                        <div className='mx-auto mb-4'>
                            <a href='/'>support@froala.com</a><br></br>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer
