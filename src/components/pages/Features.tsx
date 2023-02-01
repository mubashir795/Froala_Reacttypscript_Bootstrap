import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Features() {
  return (
    <>
      <Container>
        <h1 className='top-heading'>Froala Editor Features</h1>
        <p className='top-des'>The smartest and world's most beautiful WYSIWYG HTML text editor<br />High performance and simple design make our JavaScript text editor easy to use for developers,<br />loved by users and consistently rated the top web page editors by G2.</p>
        <div className='plan-btn-style'>
          <Link to='/'>
              <a className='plan-btn'>Download Free</a>
          </Link>
        </div>
      </Container>
      <Container>
        <Row>
          <Col sm={9}>
            <p className='gen-title'>General Information</p>
            <p className='grey-text'>Beautiful JavaScript web editor that's easy to integrate<br /> for developers and your users will simply fall in love with<br /> its clean design.</p>
          </Col>
          <Col sm={3}>
            <img src={require('../images/general-information.png')} width="300" height="264" />
          </Col>
        </Row>
        <Row className='box-top-space'>
          <Col sm={3}>
            <p className='grid-title'>Easy to Integrate</p>
            <p className='grid-des'>The editor can be integrated in any kind of project in no time. It requires only basic javascript and HTML coding knowledge.</p>
          </Col>
          <Col sm={3}>
            <p className='grid-title'>Popular</p>
            <p className='grid-des'>Our editor is a very popular HTML editor among developers and it has plugins for the most popular development Frameworks.</p>  
          </Col>
          <Col sm={3}>
            <p className='grid-title'>Easy to Upgrade</p>
            <p className='grid-des'>Keep all your customizations separated from the editor folder and upgrading is just a matter of downloading the new version.</p>
          </Col>
          <Col sm={3}>
            <p className='grid-title'>High-Quality Code</p>
            <p className='grid-des'>For us high quality code means LTFCE, in other words: Legible, Testable, Flexible, Compliant and Economical.</p>
          </Col>
        </Row>
        <Row className='box-top-space'>
          <Col sm={3}>
            <p className='grid-title'>Unit Tests</p>
            <p className='grid-des'>We know you hate testing and want a product that really works, so most of the editor's functionality is covered by unit tests.</p>
          </Col>
          <Col sm={3}>
            <p className='grid-title'>Inline Editing</p>
            <p className='grid-des'>We managed to achieve the best editing experience ever. Using the inline editor, what you see is actually what you get.</p>
          </Col>
          <Col sm={3}>
            <p className='grid-title'>Shortcuts</p>
            <p className='grid-des'>Functionality at your fingertips, shortcuts allow you to activate specific commands by using only the keyboard.</p>
          </Col>
          <Col sm={3}>
            <p className='grid-title'>Cross Browser</p>
            <p className='grid-des'>Are you an Apple fan? Or Microsoft? It doesn't matter, our editor will work the same on Safari, Internet Explorer and other browsers.</p>
          </Col>
        </Row>
        <Row className='box-top-space'>
          <Col sm={3}>
            <p className='grid-title'>Cross-Platform</p>
            <p className='grid-des'>It's tested! A busy day won't stop you from editing your website. Use your tablet or even smartphone for it.</p>
          </Col>
        </Row>
      </Container>
      <div className='bg-dark-color'>
        <Container>
          <Row>
            <Col sm={9}>
              <p className='gen-title'>Design</p>
              <p className='grey-text'>Not your grandmother's WYSIWYG text<br /> editor</p>
            </Col>
            <Col sm={3}>
              <img src={require('../images/design.png')} width="300" height="264" />
            </Col>
          </Row>
          <Row className='box-top-space'>
            <Col sm={3}>
              <p className='grid-title'>Modern Design</p>
              <p className='grid-des'>We carefully analysed the latest industry trends and designed a nice modern interface that the users will just love.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Retina Ready</p>
              <p className='grid-des'>Why Retina? More detail, better aesthetics and sharper fonts. Otherwise, millions of users will think your website is ugly.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Themes</p>
              <p className='grid-des'>The editor will fit on any website. Use the default or the dark theme, or create your own theme using the LESS theme file.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Intuitive Interface</p>
              <p className='grid-des'>Froala rich text editor offers complete functionality through a very intuitive interface that users will find natural to use.</p>
            </Col>
          </Row>
          <Row className='box-top-space'>
            <Col sm={3}>
              <p className='grid-title'>Popups</p>
              <p className='grid-des'>Modern all the way. Froala dumps the old and classic popups, adding in new, styled popups for an awesome user experience.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>SVG icons</p>
              <p className='grid-des'>The editor uses in-house made SVG icons, scalable vectorial icons that look gorgeous at any size.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Custom Style</p>
              <p className='grid-des'>Our WYSIWYG HTML editor is the only one that has a special customizer tool to change the look and feel the way you want.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Custom Toolbar</p>
              <p className='grid-des'>Too many buttons? Perhaps not in the right order? You have full control over the editor's toolbar functionality on each screen size.</p>
            </Col>
          </Row>
          <Row className='box-top-space'>
            <Col sm={3}>
              <p className='grid-title'>Sticky Toolbar</p>
              <p className='grid-des'>To ease your editing experience the WYSIWYG editor's toolbar will remain at the top of the screen while you scroll down.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Features
