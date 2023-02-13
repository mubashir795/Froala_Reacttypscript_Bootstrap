import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div className='footer-bg'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol sm={2} size='md'>
                        <div className='footer-href-items'>
                            <p className='FooterTitle'>WYSIWYG EDITOR</p>
                            <div className='mx-auto mb-4'>
                                <Link className='FooterLinks' to='/'>Overview</Link><br></br>
                                <Link className='FooterLinks' to='/'>Features</Link><br></br>
                                <Link className='FooterLinks' to='/'>Pricing</Link><br></br>
                                <Link className='FooterLinks' to='/'>Download</Link><br></br>
                                <Link className='FooterLinks' to='/'>Examples</Link><br></br>
                                <Link className='FooterLinks' to='/'>FAQ</Link><br></br>
                                <Link className='FooterLinks' to='/'>solutions</Link><br></br>
                                <Link className='FooterLinks' to='/'>Legal</Link>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol sm={2} size='md'>
                        <div className='footer-href-items'>
                            <p className='FooterTitle'>FREE TOOLS</p>
                            <div className='mx-auto mb-4'>
                                <Link className='FooterLinks' to='/'>Design Blocks</Link><br></br>
                                <Link className='FooterLinks' to='/'>Online HTML Editor</Link><br></br>
                                <Link className='FooterLinks' to='/'>Pages</Link><br></br>
                                <Link className='FooterLinks' to='/'>Image Uploader</Link><br></br>
                                <Link className='FooterLinks' to='/'>WebTestIt</Link>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol sm={2} size='md'>
                        <div className='footer-href-items'>
                            <p className='FooterTitle'>Resource</p>
                            <div className='mx-auto mb-4'>
                                <Link className='FooterLinks' to='/'>React Grid</Link><br></br>
                                <Link className='FooterLinks' to='/'>Docs</Link><br></br>
                                <Link className='FooterLinks' to='/'>Quick Start</Link><br></br>
                                <Link className='FooterLinks' to='/'>Blog</Link><br></br>
                                <Link className='FooterLinks' to='/'>Support</Link><br></br>
                                <Link className='FooterLinks' to='/'>Contact Us</Link><br></br>
                                <Link className='FooterLinks' to='/'>Case Studies</Link><br></br>
                                <Link className='FooterLinks' to='/'>Customizer</Link>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol sm={2} size='md'>
                        <div className='footer-href-items'>
                            <p className='FooterTitle'>Get In Touch</p>
                            <div className='mx-auto mb-4'>
                                <p>support@froala.com</p>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol sm={2} size='md'>
                        <div className='footer-href-items'>
                            <p className='FooterTitle'>Sign Up</p>
                            <div className='mx-auto mb-4'>
                                <p>Join our email list and receive the latest case studies, event updates, product news, and much more!</p>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='align-items-center'>
                    <MDBCol sm={2} size='md'><img  src={require('./images/froala-1.png')} width="115" height="32" /></MDBCol>
                    <MDBCol sm={2} size='md'><img  src={require('../images/G2-Spring.png')} width="50" height="65" /></MDBCol>
                    <MDBCol sm={2} size='md'></MDBCol>
                    <MDBCol sm={2} size='md'></MDBCol>
                    <MDBCol sm={2} size='md'></MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Footer
