import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Closeio() {
  return (
    <>
      <Container>
        <Row>
            <Col sm={4}>
                <img className='TopSpace' src={require('../images/close.io-dark.png')} width="185" height="38" />
                <p className='ArtSisebarText'>Froala was a perfect match having a great user experience, out-of-the-box features, and very<br/> good customer support.</p>
                <Link to='/'>
                    <a className='unbounce-text-link'>Phil Freo</a>
                </Link>
                <p className='ArtSisebarText'>Head of Product/Engineering</p>
                <h3 className='text-xxlarge'>Why Froala?</h3>
                <ul className='unbounce-bullets'>
                    <li>Worked out of the box</li>
                    <li>Developer documentation is great</li>
                    <li>Code is well architected and documented</li>
                    <li>Slim - only add the plugins that you need</li>
                    <li>Simple to extend</li>
                    <li>Well maintained</li>
                    <li>Has many integrations</li>
                </ul>
            </Col>
            <Col sm={8}>
                <h1 className='top-right-heading'>Don't reinvent the wheel.</h1>
                <p className='ArtTitle'>About Close.io</p>
                <p className='closeio-des'>Close.io is an inside sales CRM for startups and SMBs which increases the productivity by having all your sales communication in one place. It all started as ElasticSales, a team of salespeople doing sales on demand around Silicon Valley.</p>
                <img src={require('../images/close.io-team.jpg')} width="760" height="505" />
                <p className='closeio-des'>To make the whole process more efficient, they built several internal tools that eventually became the secret sauce for generating millions of dollars in sales for hundreds of venture backed Silicon Valley startups. Fortunately, their secret sauce is available for the entire world as a sales software since January 2013.</p>
                <p className='closeio-des'>One year later, Close.io was a profitable company and today has thousands of happy customers.</p>
                <blockquote>
                    <p className='text-xlarge'><em>We use Froala to add rich text editing to emails sent from our platform.</em></p>
                    <p className='unbounce-text-tint'>— Phil Freo</p>
                </blockquote>
                <p className='ArtTitle'>Close.io & Froala</p>
                <p className='closeio-des'>The Close.io engineering team used Python, Javascript (Backbone.js and React), and Froala WYSIWYG Editor to develop the Inbox feature which enables users to write rich email within the Close.io app. Together with phone and voicemails, email is one of the main tools that salespeople use on daily basis, and inbox was designed to manage all of them in one place.</p>
                <img src={require('../images/close.io-emailing.png')} width="570" height="472" />
                <p className='closeio-des'>The user interface for sending emails was an important aspect for the Inbox feature. However, Close.io's intention was never to fully replace Google Mail, but rather offer a seamless sales email experience for their users. For this they needed a WYSIWYG HTML editor: "We wanted to spend our time adding unique value creating sales-focused tools without having to reinvent the wheel."</p>
                <blockquote>
                    <p className='text-xlarge'><em>We were looking for a complete solution that handled text formatting, image uploading, etc. in a very polished way.</em></p>
                    <p className='unbounce-text-tint'>— Phil Freo</p>
                </blockquote>
                <p className='closeio-des'>Created by successful salespeople for salespeople, Close.io has a suit of sales optimization tools, and Inbox deals with everyday seamless emails. Froala WYSIWYG HTML Editor was key in making that happen.</p>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Closeio
