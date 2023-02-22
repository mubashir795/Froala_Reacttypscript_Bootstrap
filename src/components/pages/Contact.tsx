import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <>
      <Container>
            <div className='CenterObject'>
                <img src={require('../images/froala.png')} width="285" height="140"/>
            </div>
            <Row className='align-items-center'>
                <p className='ContactTitle'>We would love to hear from you!</p>
                <p className='top-des strong'>The Help Center page may answer your question faster. Don't forget to check it out.</p>
            </Row>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <p>If you wish to contact with our sales team, You can email support@froala.com directly.</p>
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
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <div className='CenterObject'>
                <p className='contact-text'>We're social</p>
                <p className='contact_social_text'>10801 N Mopac Expressway, Suite 100</p>
                <p className='contact_social_text'>Austin Texas 78759</p>
            </div>
        </Container>
    </>
  )
}

export default Contact
