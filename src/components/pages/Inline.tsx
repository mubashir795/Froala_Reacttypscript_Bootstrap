import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Inline() {
  return (
    <>
      <Container>
        <h1 className='top-heading'>Inline WYSIWYG Editor Demo</h1>
        <p className='top-des'><b>Double-click here</b> to test the inline rich text editor. <b>This entire page is a demo.</b></p>
      </Container>
      <Container className='TopMargin'>
        <Row className='align-items-center'>
          <Col sm={4}>
            <p className='TextTitle'>Innovative</p>
            <p className='text-inline'>We believe that Froala WYSIWYG HTML Editor is the best Javascript rich text editor out there. It is our obsession to push the WYSIWYG editing limits further and create an outstanding experience.</p>
          </Col>
          <Col sm={4}><img src={require('../images/editor-inline.png')} width="358" height="298"/></Col>
          <Col sm={4}>
            <p className='TextTitle'>Powerful</p>
            <p className='text-inline'>Loved by users and friendly with developers, our rich text editor comes with a powerful API and comprehensive documentation - making it easy to integrate, customize and extend.</p>
          </Col>
        </Row>
      </Container>
      <div className='bg-dark-color'>
        <Container>
            <Row className='align-items-center'>
              <Col sm={6}><img src={require('../images/connected_world.png')} width="553" height="289" /></Col>
              <Col sm={6}>
                <p className='TextTitle'>International</p>
                <p className='text-inline'>Froala Javascript WYSIWYG editor is used worldwide in many countries and in various languages. It has full RTL support, so writing in Arabic, Farsi or Hebrew will feel natural. Even the toolbar changes to give it the perfect feel.</p>
              </Col>
            </Row>
        </Container>
      </div>
      <Container className='TopMargin'>
        <Row className='align-items-center'>
          <Col sm={4}>
            <p className='TextTitle'>Secure</p>
            <p className='text-inline'>Froala WYSIWYG HTML text editor has a strong defense mechanism against all types of XSS attacks. It's built in the core of the editor and we're keeping it that way while adding new features.</p>
          </Col>
          <Col sm={4}>
            <p className='TextTitle'>SEO</p>
            <p className='text-inline'>Our JavaScript rich text editor respects the HTML5 standards and cleans all the unnecessary HTML. It produces clean output, waiting to be crawled by search engines.</p>
          </Col>
          <Col sm={4}><img src={require('../images/editor-inline.png')} width="358" height="298"/></Col>
        </Row>
      </Container>
      <div className='bg-dark-color'>
        <Container>
            <Row className='align-items-center'>
              <Col sm={4}><img src={require('../images/editor-inline.png')} width="358" height="298"/></Col>
              <Col sm={8}>
                <p className='TextTitle'>Impressive</p>
                <p className='text-inline'>We care about UX almost more than anything else. It's what differentiates our rich text editor and it's also what makes it the world's most beautiful WYSIWYG editor.</p>
              </Col>
            </Row>
        </Container>
      </div>
      <Container>
        <Row className='align-items-center bottom-space'>
          <Col sm={2}></Col>
          <Col sm={6}><h2 className='top-heading'>Find a plan that's right for you!</h2></Col>
          <Col sm={2}>
              <div className='img-inline-btn'>
                  <Link to='/'>
                  <a className='plan-btn'>Start Building</a>
                  </Link>
              </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </>
  )
}

export default Inline
