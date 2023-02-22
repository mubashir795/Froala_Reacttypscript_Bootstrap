import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function Sdkc() {
  return (
    <>
      <section>
        <Container>
            <Row>
                <Col sm={4}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Getting Started</Accordion.Header>
                            <Accordion.Body>Lorem ipsum dolor sit amet,</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Customize the Editor</Accordion.Header>
                            <Accordion.Body>Lorem ipsum dolor sit amet,</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Migration Guides</Accordion.Header>
                            <Accordion.Body>Lorem ipsum dolor sit amet,</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Examples</Accordion.Header>
                            <Accordion.Body>Lorem ipsum dolor sit amet,</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Plugins</Accordion.Header>
                            <Accordion.Body>Lorem ipsum dolor sit amet,</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Plugins</Accordion.Header>
                            <Accordion.Body>APIs</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col sm={8}>
                    <h1 className='top-right-heading'>Froala WYSIWYG Editor SDKs</h1>
                    <p className='closeio-des'>Froala Javascript WYSIWYG Editor has server side SDKs for multiple languages to help ease the editor's integration with your server.</p>
                    <Row className='ImageBoxSdkc'>
                        <Col sm={2}><img src={require('../images/dotnet.png')} width="40" height="40" /></Col>
                        <Col sm={2}><img src={require('../images/java.png')} width="40" height="40" /></Col>
                        <Col sm={2}><img src={require('../images/nodejs.png')} width="40" height="40" /></Col>
                        <Col sm={2}><img src={require('../images/php.png')} width="40" height="40" /></Col>
                        <Col sm={2}><img src={require('../images/python.png')} width="40" height="40" /></Col>
                        <Col sm={2}><img src={require('../images/rails-2.png')} width="40" height="40" /></Col>
                    </Row>
                    <h2 className="LeftBorder">About</h2>
                    <p className="TextLarge">Each server SDK library contains information about how to install and configure it, how to handle different server side operations on images, files and how to use the image manager.</p>
                    <h2 className="LeftBorder">Image</h2>
                    <p className="TextLarge">The Froala rich text editor SDKs offers detailed explanations, accompanied by code example for the following actions on images:</p>
                    <ul>
                        <li>Server Upload</li>
                        <li>Server Delete</li>
                        <li>S3 Upload</li>
                        <li>Resize</li>
                        <li>Validation</li>
                    </ul>
                    <p className="TextLarge">The Froala rich text editor SDKs offers detailed explanations, accompanied by code example for the following actions on images:</p>
                    <h2 className="LeftBorder">Image Manager</h2>
                    <p className="TextLarge">When using the Froala WYSIWYG Editor Image Manager, your server will need to receive and handle:</p>
                    <ul>
                        <li>the load images request</li>
                        <li>the delete image from Image Manager request</li>
                    </ul>
                    <h2 className="LeftBorder">File</h2>
                    <ul>
                        <li>Server Upload</li>
                        <li>Server Delete</li>
                        <li>S3 Upload</li>
                        <li>Validation</li>
                    </ul>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Sdkc
