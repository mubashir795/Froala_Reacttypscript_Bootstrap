import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Unbounce() {
  return (
    <>
      <Container>
        <Row>
            <Col sm={4}>
                <img className='TopSpace' src={require('../images/unbounce-colored.png')} width="185" height="45" />
                <p className='ArtSisebarText'>Thank you for such fast response, we really appreciate the effort of your team.</p>
                <Link to='/'>
                    <a className='unbounce-text-link'>Leonard Teo</a>
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
                <p className='ArtTitle'>About Unbounce</p>
                <p className='closeio-des'>In 2009, very few heard about Unbounce, but today they are known worldwide for the landing page and conversion marketing platform they created to empower every business to create better marketing experiences.</p>
                <p className='closeio-des'>In the startups world they are known for the way they managed to get traction in the early days. Unbounce began blogging and used the blog as a marketing tool even before they had a product. This not only helped them to shape their product, but it also created them an email list of over 5000 strong leads when they launched.</p>
                <img src={require('../images/unbounce-dog.jpeg')} width="570" height="570" />
                <p className='closeio-des'>They’ve seen a lot of growth and change over the years and today Unbounce is the platform to use for building landing pages and more than 14,000 brands already know this.</p>
                <p className='closeio-des'>However the Unbounce page builder needed a new and better way to edit the landing pages. 2016 was the year when this happened.</p>
                <blockquote>
                    <p className='text-xlarge'><em>This is potentially a big win for us and our team really appreciates all the effort you have put in and your quick response times.</em></p>
                    <p className='unbounce-text-tint'>— Olivia Zhang, Software Developer</p>
                </blockquote>
                <p className='ArtTitle'>Unbounce & Froala</p>
                <p className='closeio-des'>Editing should be simple, what you see should be what you get and there’s no reason for having a separate text panel instead of editing the text directly on the page itself. Previously, the separate text panel had to be closed before users could see what their text would actually look like on their landing page.</p>
                <Row>
                    <Col sm={6}><img src={require('../images/artstation-marmoset.jpeg')} width="365" height="222" /></Col>
                    <Col sm={6}><img src={require('../images/artstation-sketchfab.jpeg')} width="365" height="222" /></Col>
                </Row>
                <p className='closeio-des'>Thanks to its built-in features and easiness to customize, Froala Inline WYSIWYG Text Editor was the perfect choice for Unbounce to take editing to the next level. This allows users to create content faster and easier as they can instantly see how their text fits into their design without having to switch contexts.</p>
                <blockquote>
                    <p className='text-xlarge'><em>This is potentially a big win for us and our team really appreciates all the effort you have put in and your quick response times.</em></p>
                    <p className='unbounce-text-tint'>— Olivia Zhang, Software Developer</p>
                </blockquote>
                <img src={require('../images/unbounce-swags.jpeg')} width="760" height="505" />
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Unbounce
