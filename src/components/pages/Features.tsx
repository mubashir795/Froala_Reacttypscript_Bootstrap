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
            <Col sm={3}>
              <p className='grid-title'>Toolbar Offset</p>
              <p className='grid-des'>The rich text editor's toolbar does not have to overlap with the header on your webpage, just set an offset for it.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Toolbar At The Bottom</p>
              <p className='grid-des'>Easily change the WYSIWYG HTML editor toolbar's position from top to bottom, while also using the sticky toolbar or an offset.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Full Screen</p>
              <p className='grid-des'>Dealing with large amounts of content requires a large editing space. The fullscreen button will expand the editing area to the whole webpage space.</p>
            </Col>
          </Row>
          <Row className='box-top-space'>
            <Col sm={3}>
              <p className='grid-title'>Full Page</p>
              <p className='grid-des'>Writing and editing an entire HTML page is also possible. Helpful for emails, but not only, the usage of HTML, HEAD, BODY tags and DOCTYPE declaration is permitted.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Iframe</p>
              <p className='grid-des'>The WYSIWYG HTML editor's content can be isolated from the rest of the page using iframe so there is no style or script conflicts.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Document Ready</p>
              <p className='grid-des'>the best options for creating online documents.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Min and Max Height</p>
              <p className='grid-des'>The editor's height will automatically adjust between the Min and Max height values to fit the content inside the editable area.</p>
            </Col>
          </Row>
          <Row className='box-top-space'>
            <Col sm={3}>
              <p className='grid-title'>Predefined Height</p>
              <p className='grid-des'>Set a specific height to the WYSIWYG HTML editor using the height option. If the text inside is longer, then the rich text editor will get a vertical scrollbar</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <h1 className='top-heading'>Build great things with style</h1>
        <div className='plan-btn-style'>
          <Link to='/'>
              <a className='plan-btn'>Strat Designing</a>
          </Link>
        </div>
      </Container>
      <Container>
        <Row>
          <Col sm={9}>
            <p className='gen-title'>Performance</p>
            <p className='grey-text'>Six times faster than the blink of an eye, our rich text<br />editor will initialize in less than 40ms.</p>
          </Col>
          <Col sm={3}>
            <img src={require('../images/performance.png')} width="300" height="264" />
          </Col>
        </Row>
        <Row className='box-top-space'>
          <Col sm={3}>
            <p className='grid-title'>Lightweight</p>
            <p className='grid-des'>With its gzipped core of only 50KB, you can bring in an amazing editing experience to your app without losing loading speed.</p>
          </Col>
          <Col sm={3}>
            <p className='grid-title'>Plugin Based</p>
            <p className='grid-des'>The modular structure makes our WYSIWYG HTML editor more efficient, easier to understand, extend and maintain.</p>
          </Col>
          <Col sm={3}>
            <p className='grid-title'>Multiple Editors on a Page</p>
            <p className='grid-des'>One or ten text editors on the same page? You won't feel a difference, just set them to be initialized on click.</p>
          </Col>
          <Col sm={3}>
            <p className='grid-title'>HTML 5</p>
            <p className='grid-des'>Froala Rich Text Editor is built respecting and taking advantage of the HTML 5 standards.</p>
          </Col>
        </Row>
        <Row className='box-top-space'>
          <Col sm={3}>
            <p className='grid-title'>CSS 3</p>
            <p className='grid-des'>What better way to improve user experience than using CSS 3? Subtle effects makes the editor even greater.</p>
          </Col>
        </Row>
      </Container>
      <div className='bg-dark-color'>
        <Container>
          <Row>
            <Col sm={9}>
              <p className='gen-title'>Optimized for Mobile</p>
              <p className='grey-text'>Froala is a responsive WYSIWYG editor that fit in any<br /> screen size.</p>
            </Col>
            <Col sm={3}>
              <img src={require('../images/optimized.png')} width="300" height="264" />
            </Col>
          </Row>
          <Row className='box-top-space'>
            <Col sm={3}>
              <p className='grid-title'>Android and iOS</p>
              <p className='grid-des'>We know how used mobile devices are and we are running tests on both Android and iOS devices.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Image Resize</p>
              <p className='grid-des'>Froala Rich Text Editor is the first WYSIWYG HTML editor with image resize that works even on mobile devices.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Video Resize</p>
              <p className='grid-des'>We are the first to introduce resize for videos even when they are playing. And of course we made it work on mobile too.</p>
            </Col>
            <Col sm={3}>
              <p className='grid-title'>Responsive Design</p>
              <p className='grid-des'>The content you are editing will be responsive. Our WYSIWYG HTML editor can handle image resize using percentages.</p>
            </Col>
          </Row>
          <Row className='box-top-space'>
            <Col sm={3}>
              <p className='grid-title'>Toolbar by Screen Size</p>
              <p className='grid-des'>For the first time in a rich text editor, the toolbar can be customized for each screen size.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <h1 className='top-heading'>Fast and responsive? We got you</h1>
        <div className='plan-btn-style'>
          <Link to='/'>
              <a className='plan-btn'>Start Building</a>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Features
