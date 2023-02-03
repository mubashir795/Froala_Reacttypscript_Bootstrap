import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Online() {
  return (
    <>
      <Container>
        <h1 className='top-heading'>Free Online HTML Editor Powered by Froala</h1>
        <p className='top-des'>A Real-time Editor to Quickly Create Clean and Valid HTML Code.</p>
        <p className='top-des'>How do I use this online HTML Editor?</p>
        <p className='top-des'>Convert text to HTML, sanity check your HTML code, or use it like an online notepad to save text in a PDF or word file.</p>
        <p className='top-des'>Compose or copy text in the left editor and see clean and directly usable HTML code in the right window.</p>
        <p className='top-des'>Love to write code? Simply paste your HTML on the right and see the text output in the left editor.</p>
      </Container>
        <div className='bg-dark-color'>
            <Container>
                <h1 className='top-heading'>Looking for an HTML Editor for your personal or enterprise<br /> application?</h1>
                <p className='top-des'>Froala WYSIWYG Editor is your perfect choice.</p>
                <div className='plan-btn-style'>
                    <Link to='/'>
                        <a className='plan-btn'>Try Froala Editor for Free</a>
                    </Link>
                </div>
                <h1 className='top-heading'>Simply Beyond Words and Letters</h1>
                <p className='top-des'>Froala Editor enables rich editing and formatting capabilities for your web and mobile applications.</p>
                <Row>
                    <Col sm={3} className="online-card">
                        <h3 className='online-light'>Editing</h3>
                        <p className='text-froala'>Enhance text with basic to advanced editing—bold, italic, underline, subscript, superscript, strikethrough, and more.</p>
                    </Col>
                    <Col sm={3} className="online-card">
                        <h3 className='online-light'>Styling and Formatting</h3>
                        <p className='text-froala'>Change fonts, align text, create ordered list, bullets, quotes, indentation, apply color themes, inline classes, line heights, paragraph styles, drag-drop, add shortcuts, and so much more.</p>
                    </Col>
                    <Col sm={3} className="online-card">
                        <h3 className='online-light'>Images and Media</h3>
                        <p className='text-froala'>Insert images, audio, and video to the editor. Add urls, apply styles to images, or customize image editing, add custom color pickers, or express yourself with emoticons.</p>
                    </Col>
                    <Col sm={3} className="online-card">
                        <h3 className='online-light'>30+ Plugins and Easy</h3>
                        <p className='text-froala'>3rd party Integration Font awesome? Spell and grammar checker? Froala has easy 3rd party integration. Plus over 30 out-of-the-box plugins and customization options.</p>
                    </Col>
                </Row>
                <div className='plan-btn-style'>
                    <Link to='/'>
                        <a className='plan-btn'>Explore All Features</a>
                    </Link>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Online
