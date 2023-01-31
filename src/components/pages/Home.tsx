import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <>
      <Container>
          <h1 className='top-heading'>The Next Generation WYSIWYG HTML Editor</h1>
          <p className='top-des'>Beautiful JavaScript web editor that's easy to integrate for developers<br></br>and your users will simply fall in love with its clean design.</p>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
              <div className='row-btn'>
                  <Link to='/explore' className='btn-explore'>
                      <a className='btn-inline-ex'>Explore</a>
                  </Link>
                  <Link to='/download' className='btn-download'>
                      <a className='btn-inline-down'>Dwonload</a>
                  </Link>
              </div>
            </Col>
            <Col sm={4}></Col>
          </Row>
          <Row>
            <Col xs={2} md={2}></Col>
            <Col xs={8} md={8}>
              <div className='gif-home-img'>
                  <Link to='/'><img src={require('../images/MultiFeatureDemo3.gif')} width="950" height="578"/></Link>
              </div>
            </Col>
            <Col xs={2} md={2}></Col>
          </Row>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}><p className='text-bold'>These companies are changing the world, and they use Froala.</p></Col>
            <Col sm={3}></Col>
          </Row>
      </Container>
      <div className='bg-dark-color'>
        <Container>
          <p className='heading-text'>Why Froala Editor?</p>
          <Row>
            <Col sm={4}>
              <img src={require('../images/devs.png')} width="100" height="100" />
              <p className='edit-title'>Developer friendly</p>
              <p className='edit-des'>A WYSIWYG HTML editor created by developers, for developers. With a powerful API and documentation you can get started in minutes.</p>
              <p className='edit-link'><Link to="/download">Quick start<i className='fa fa-angle-right icon-after'></i></Link></p>
            </Col>
            <Col sm={4}>
              <img src={require('../images/custom.png')} width="100" height="100" />
              <p className='edit-title'>Easy to extend</p>
              <p className='edit-des'>You can literally do anything with the Froala Editor. Well written, structured and documented code is very easy to understand and further extend.</p>
              <p className='edit-link'><Link to="/extend">Custom build<i className='fa fa-angle-right icon-after'></i></Link></p>
            </Col>
            <Col sm={4}>
              <img src={require('../images/plugins.png')} width="100" height="100" />
              <p className='edit-title'>Out of the box plugins</p>
              <p className='edit-des'>There's no need to reinvent the wheel. Our rich text editor comes with over 30 out of the box plugins to choose from and use in your project.</p>
              <p className='edit-link'><Link to="/plugin">See plugins<i className='fa fa-angle-right icon-after'></i></Link></p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col sm={4}>
            <img src={require('../images/editor-inline.png')} width="390" height="262"/>
          </Col>
          <Col sm={8}>
            <p className='inline-title'>Classic and Inline</p>
            <p className='inline-des'>There's no need to reinvent the wheel. Our rich text editor comes with over 30 out of the box plugins to choose from and use in your project.</p>
            <div className='intline-btn-link'>
              <Link to='/inline'>
                  <a className='inline-btn'>Inline Demo</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='bg-white'>
        <p className='text-bold'>Use it right away with your existing tech stack.</p>
        <Row className='top-space'>
          <Col sm><img src={require('../images/rails.png')} width="86" height="30"/></Col>
          <Col sm><img src={require('../images/react.png')} width="50" height="30"/></Col>
          <Col sm><img src={require('../images/aurelia.png')} width="86" height="30"/></Col>
          <Col sm><img src={require('../images/angular.png')} width="50" height="30"/></Col>
          <Col sm><img src={require('../images/ionic.png')} width="86" height="30"/></Col>
          <Col sm><img src={require('../images/vue.png')} width="86" height="30"/></Col>
          <Col sm><img src={require('../images/yii.png')} width="100" height="30"/></Col>
          <Col sm><img src={require('../images/meteor.png')} width="86" height="30"/></Col>
          <Col sm><img src={require('../images/django.png')} width="86" height="30"/></Col>
        </Row>
        <Row className='top-space'>
          <Col sm><img src={require('../images/ember.png')} width="78" height="30"/></Col>
          <Col sm><img src={require('../images/knockoutjs.png')} width="78" height="30"/></Col>
          <Col sm><img src={require('../images/cakephp.png')} width="78" height="30"/></Col>
          <Col sm><img src={require('../images/symfony.png')} width="78" height="30"/></Col>
          <Col sm><img src={require('../images/ionic.png')} width="78" height="30"/></Col>
          <Col sm><img src={require('../images/wordpress.png')} width="100" height="30"/></Col>
          <Col sm><img src={require('../images/sencha.jpeg')} width="78" height="30"/></Col>
        </Row>
      </Container>
      <Container>
        <p className='heading-text'>Get Started Now</p>
        <p className='text-bold'>Unlimited users and developers no matter which plan you choose.</p>
        <p className='text-small'>For any questions contact us or check out our Help Center.</p>
        <div className='plan-btn-style'>
            <Link to='/'>
                <a className='plan-btn'>See Our Plans</a>
            </Link>
        </div>
      </Container>
    </>
    
  );
}

export default Home;
