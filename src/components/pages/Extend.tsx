import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Extend() {
  return (
    <>
        <Container>
            <h1 className='top-heading'>How do I extend Froala Editor?</h1>
            <p className='top-des strong'>Our customers say it's easy. Let's see why!</p>
        </Container>
        <Container>
            <Row className='align-items-center'>
                <Col sm={3}></Col>
                <Col sm={6} className='GreyBox'>
                    <img src={require('../images/artstation-square.png')} width="56" height="56"/>
                    <p className='TextTitle'>Don't reinvent the wheel.</p>
                    <p className='TextDes'>"ArtStation needed a WYSIWYG HTML editor for media heavy content and Froala was the one to meet their expectations."</p>
                    <div className='btn-onbounce'>
                        <Link to='/'>
                            <a className='plan-btn'>Read Story</a>
                        </Link>
                    </div>
                </Col>
                <Col sm={3}></Col>
            </Row>
        </Container>
        <Container className='TopSpace'>
            <Row className='align-items-center'>
                <Col sm={3}>
                    <img src={require('../images/design-2.png')} width="56" height="56"/>
                    <p className='TextTitle'>Design</p>
                    <p className='edit-des'>Every website is unique, but Froala WYSIWYG HTML Editor has been designed to fit every single one.</p>
                </Col>
                <Col sm={3}>
                    <img src={require('../images/concepts.png')} width="56" height="56"/>
                    <p className='TextTitle'>Concepts</p>
                    <p className='edit-des'>Want a better understanding on how stuff works? Our concept docs will make it crystal clear for you.</p>
                </Col>
                <Col sm={3}>
                    <img src={require('../images/examples.png')} width="56" height="56"/>
                    <p className='TextTitle'>Examples</p>
                    <p className='edit-des'>Live working examples with custom elements are always a good starting point for any project.</p>
                </Col>
                <Col sm={3}>
                    <img src={require('../images/plugins-2.png')} width="56" height="56"/>
                    <p className='TextTitle'>Existing Plugins</p>
                    <p className='edit-des'>Easily add new functionality to the Javascript rich text editor by using existing plugins as a basis.</p>
                </Col>
            </Row>
        </Container>
        <Container className='TopMargin'>
            <Row className='align-items-center'>
                <Col sm={6}><img src={require('../images/impressive.png')} width="565" height="213" /></Col>
                <Col sm={6}>
                    <p className='TextTitle'>Your own design.</p>
                    <p className='text-inline'>Personalize Froala WYSIWYG HTML Editor just the way you want by choosing one of our themes or building your own.</p>
                </Col>
            </Row>
        </Container>
        <div className='bg-dark-color'>
            <Container>
                <Row>
                    <Col sm={4}><img src={require('../images/concepts.png')} width="136" height="136" /></Col>
                    <Col sm={8}>
                        <p className='text-inline'>Get in-depth information on how to successfully extend the Froala WYSIWYG HTML Editor:</p>
                        <Row>
                            <Col sm={4}>
                                <p className='TextTitle'>Custom Elements</p>
                                <ul className='Extendlist'><li><Link to='/'><a>Plugin</a></Link></li></ul>
                                <ul className='Extendlist'><li><Link to='/'><a>Toolbar Button</a></Link></li></ul>
                                <ul className='Extendlist'><li><Link to='/'><a>Dropdown</a></Link></li></ul>
                                <ul className='Extendlist'><li><Link to='/'><a>Icon</a></Link></li></ul>
                                <ul className='Extendlist'><li><Link to='/'><a>Popup</a></Link></li></ul>
                                <ul className='Extendlist'><li><Link to='/'><a>Shortcut</a></Link></li></ul>
                        </Col>
                            <Col sm={4}>
                                <p className='TextTitle'>Save</p>
                                <ul className='Extendlist'><li><Link to='/'><a>Autosave</a></Link></li></ul>
                                <ul className='Extendlist'><li><Link to='/'><a>Save inside FORM</a></Link></li></ul>
                                <ul className='Extendlist'><li><Link to='/'><a>Save button</a></Link></li></ul>
                            </Col>
                            <Col sm={4}>
                                <p className='TextTitle'>Media</p>
                                <ul className='Extendlist'><li><Link to='/'><a>File Upload</a></Link></li></ul>
                                <ul className='Extendlist'><li><Link to='/'><a>Image Upload</a></Link></li></ul>
                                <ul className='Extendlist'><li><Link to='/'><a>Delete Image</a></Link></li></ul>
                                <ul className='Extendlist'><li><Link to='/'><a>Image Manager</a></Link></li></ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container className='TopMargin'>
            <Row>
                <Col sm={4}><img src={require('../images/examples.png')} width="136" height="136" /></Col>
                <Col sm={8}>
                    <p className='text-inline'>Our editor is built with an architecture that allows you to easily create custom elements and add them to the Javascript rich text editor:</p>
                    <ul className='Extendlist'><li><Link to='/'><a>Toolbar Button</a></Link></li></ul>
                    <ul className='Extendlist'><li><Link to='/'><a>Image Button</a></Link></li></ul>
                    <ul className='Extendlist'><li><Link to='/'><a>Dropdown</a></Link></li></ul>
                    <ul className='Extendlist'><li><Link to='/'><a>Color Picker Popup</a></Link></li></ul>
                    <ul className='Extendlist'><li><Link to='/'><a>Popup</a></Link></li></ul>
                    <ul className='Extendlist'><li><Link to='/'><a>Emoticons Popup</a></Link></li></ul>
                </Col>
            </Row>
        </Container>
        <div className='bg-dark-color'>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6}>
                        <p className='TextTitle'>Existing Plugins</p>
                        <p className='text-inline'>You have the freedom to create the most impressive functionality seen in a WYSIWYG editor so far. Almost everyone starts with an existing plugin.</p>
                    </Col>
                    <Col sm={6}><img src={require('../images/existing-plugins.png')} width="565" height="382" /></Col>
                </Row>
            </Container>
        </div>
        <Container>
            <h1 className='top-heading'>Still not sure where to start?</h1>
            <p className='top-des strong'>If you can't find an answer, check out our Help Center page or contact our Support team.</p>
        </Container>
    </>
  )
}

export default Extend
