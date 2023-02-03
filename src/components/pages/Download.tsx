import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Download() {
  return (
    <>
      <Container>
        <h1 className='top-heading'>All-purpose, easy to use WYSIWYG editor with elegance</h1>
        <p className='top-des'>We make web editing easier, more powerful and more enjoyable with every single click.</p>
        <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
                <div className='row-btn'>
                    <Link to='/explore' className='btn-explore'>
                        <a className='btn-inline-ex'>Start Free Trial</a>
                    </Link>
                    <Link to='/download' className='btn-download'>
                        <a className='btn-inline-down'>Check our Pricing</a>
                    </Link>
                </div>
            </Col>
            <Col sm={3}></Col>
        </Row>
        <Row>
            <Col sm={4}></Col>
            <Col sm={4} className="center-text">
                <p className='use-text'>Or simply use NPM <span className='bg-light-color'> npm install froala-editor</span></p>
            </Col>
            <Col sm={4}></Col>
        </Row>
      </Container>
        <div className='bg-dark-color'>
            <Container>
                <p className='top-text'>G2’s top WYSIWYG editor for over two years</p>
                <Row>
                    <Col><img src={require('../images/G2-Spring.png')} /></Col>
                    <Col><img src={require('../images/G2-Spring.png')} /></Col>
                    <Col><img src={require('../images/G2-Spring.png')} /></Col>
                    <Col><img src={require('../images/G2-Spring.png')} /></Col>
                    <Col><img src={require('../images/G2-Spring.png')} /></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}><p className='text-bold'>These companies are changing the world, and they use Froala.</p></Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col><img src={require('../images/samsung.png')} width="75" height="25"/></Col>
                    <Col><img src={require('../images/apple.png')} width="25" height="25"/></Col>
                    <Col><img src={require('../images/ibm.png')} width="62" height="25"/></Col>
                    <Col><img src={require('../images/amazon.png')} width="124" height="25"/></Col>
                    <Col><img src={require('../images/ebay.png')} width="62" height="25"/></Col>
                    <Col><img src={require('../images/intel.png')} width="38" height="25"/></Col>
                    <Col><img src={require('../images/netflix.png')} width="88" height="25"/></Col>
                    <Col><img src={require('../images/cisco.png')} width="44" height="25"/></Col>
                    <Col><img src={require('../images/thomson.png')} width="107" height="25"/></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={4}><p className="text-read-more"><a href='/customers'><a className='text-read-more'>Read more about our customers</a></a></p></Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
        </div>
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}><p className='top-text'>Mobile Friendly</p></Col>
                <Col sm={2}></Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <p className="text-tint">
                        With over 1.9 billion mobile web users worldwide, mobile is more than a trend and it is not the future, it's the present. This has convinced us that mobile has to be on the first place.
                    </p>
                </Col>
                <Col sm={6}>
                    <p className="text-tint">
                        With over 1.9 billion mobile web users worldwide, mobile is more than a trend and it is not the future, it's the present. This has convinced us that mobile has to be on the first place.
                    </p>
                </Col>
            </Row>
            <Row className='box-top-space'>
                <Col sm={4}>
                <p className='grid-title'>Android and iOS</p>
                <p className='grid-des'>We know how used mobile devices are and we are running tests on both Android and iOS devices.</p>
                </Col>
                <Col sm={4}>
                <p className='grid-title'>Image Resize</p>
                <p className='grid-des'>Froala Rich Text Editor is the first WYSIWYG HTML editor with image resize that works even on mobile devices.</p>
                </Col>
                <Col sm={4}>
                <p className='grid-title'>Video Resize</p>
                <p className='grid-des'>We are the first to introduce resize for videos even when they are playing. And of course we made it work on mobile too.</p>
                </Col>
            </Row>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}><p className='top-text'>Next Generation UX</p></Col>
                <Col sm={2}></Col>
            </Row>
            <Row>
                <Col sm={3}></Col>
                <Col sm={6}><img src={require('../images/new-editor.jpeg')} width="805" height="411"/></Col>
                <Col sm={3}></Col>
            </Row>
        </Container>
        <Container>
            <Row className='box-top-space'>
                <Col sm={4}>
                    <p className='grid-title'>Simple</p>
                    <p className='grid-des'>We designed a simple and intuitive toolbar where every feature is easy to find and your most wanted ones are right there.</p>
                </Col>
                <Col sm={4}>
                    <p className='grid-title'>Smart</p>
                    <p className='grid-des'>We designed a Smart Editor Toolbar made of contextually relevant groups of buttons, displays only the most common or most used ones.</p>
                </Col>
                <Col sm={4}>
                    <p className='grid-title'>Full of features</p>
                    <p className='grid-des'>It's simple and smart and it can hold all the buttons you ever wished without overwhelming the end user.</p>
                </Col>
            </Row>
        </Container>
        <div className='bg-dark-color'>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}><p className='top-text'>Impressive Popups</p></Col>
                    <Col sm={2}></Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <p className='grid-title'>Inline Popup</p>
                        <p className="text-tint">WYSIWYG has a strong meaning for us and we achieved our goals with an amazing and unique inline editor.</p>
                    </Col>
                    <Col sm={6}>
                        <p className='grid-title'>Editing Popups</p>
                        <p className="text-tint">We designed all popups and toolbars in just the right way to make the editor look natural on any modern website.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}><p className='top-text'>Modern and Highly Customizable</p></Col>
                    <Col sm={2}></Col>
                </Row>
                <Row className='box-top-space'>
                    <Col sm={4}>
                        <p className='grid-title'>Modern Design</p>
                        <p className='grid-des'>The perfect editor is the one that fits best on your website. The unitary feel and modern design will exceed your expectations.</p>
                    </Col>
                    <Col sm={4}>
                        <p className='grid-title'>Customizer</p>
                        <p className='grid-des'>We strive to make your work easier and more pleasant and we created the first customizing tool for a rich text editor.</p>
                    </Col>
                    <Col sm={4}>
                        <p className='grid-title'>Retina</p>
                        <p className='grid-des'>Be a professional, don't cut any corners and offer your users the best visual experience possible.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <div className='row-btn'>
                            <Link to='/explore' className='btn-explore'>
                                <a className='btn-inline-ex'>Start Free Trial</a>
                            </Link>
                            <Link to='/download' className='btn-download'>
                                <a className='btn-inline-down'>Check our Pricing</a>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div>
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}><p className='top-text'>Rich Image & Video Handling</p></Col>
                <Col sm={2}></Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <p className='grid-title'>Wrap Text</p>
                    <p className="text-tint">Desired and yet missing from all other WYSIWYG HTML text editors. Froala makes wrapping text around images and videos possible.</p>
                </Col>
                <Col sm={6}>
                    <p className='grid-title'>Cross-Browser Reposition</p>
                    <p className="text-tint">You know how important it is for your users to be able to use whatever browser they want. Yes, image reposition works on all browsers.</p>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <p className='grid-title'>Video Preview and Resize</p>
                    <p className="text-tint">Wouldn't it be nice to preview videos while still editing? Yes, that's possible and you can also resize them at the same time.</p>
                </Col>
                <Col sm={6}>
                    <p className='grid-title'>All Like One</p>
                    <p className="text-tint">You might as well have multiple Froala WYSIWYG HTML editors on the same page, your users may drag & drop images from one to another.</p>
                </Col>
            </Row>
        </Container>
        <div className='bg-dark-color'>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}><p className='top-text'>Clever Table Tool</p></Col>
                    <Col sm={2}></Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <p className='grid-title'>Cell Selection</p>
                        <p className="text-tint">Cell selection was never the same on two different browsers. Starting with the Froala WYSIWYG HTML Editor Version 2 we developed a special table cell selection feature.</p>
                    </Col>
                    <Col sm={6}>
                        <p className='grid-title'>Table Editing</p>
                        <p className="text-tint">Table editing will never be the same after trying our new tool. Using right click to edit tables in a web browser is wrong. Most users want the right click context menu untouched. And that's exactly what we are doing.</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}><p className='top-text'>Powerful</p></Col>
                <Col sm={2}></Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <p className='grid-title'>Clean HTML</p>
                    <p className="text-tint">The outputted HTML has always been a problem. We have taken the challenge and created and algorithm that solves it.</p>
                </Col>
                <Col sm={4}>
                    <p className='grid-title'>Secure</p>
                    <p className="text-tint">It is a known fact that our WYSIWYG HTML editor is one of the most secure rich text editors out there. This is a top concern for us.</p>
                </Col>
                <Col sm={4}>
                    <p className='grid-title'>Fast</p>
                    <p className="text-tint">It was designed with performance in mind and therefore it is prepared to withstand rigorous tests.</p>
                </Col>
            </Row>
            <Row>
                <Col sm={3}></Col>
                <Col sm={6}>
                    <div className='row-btn'>
                        <Link to='/explore' className='btn-explore'>
                            <a className='btn-inline-ex'>Start Free Trial</a>
                        </Link>
                        <Link to='/download' className='btn-download'>
                            <a className='btn-inline-down'>Check our Pricing</a>
                        </Link>
                    </div>
                </Col>
                <Col sm={3}></Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}><p className='top-text'>Popular features</p></Col>
                <Col sm={2}></Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <img src={require('../images/international.png')} width="70" height="70" />
                    <p className='grid-title'>International</p>
                    <p className="text-tint">Used all over the world, in more than 100 countries, our Javascript rich text editor simply works in every language, including East Asian languages.</p>
                </Col>
                <Col sm={4}>
                    <img src={require('../images/paste.png')} width="70" height="70" />
                    <p className='grid-title'>Word & Excel Paste</p>
                    <p className="text-tint">Choose if you wish to keep or clean formatting when pasting from Microsoft Word and Excel and the rich text editor does it all for you.</p>
                </Col>
                <Col sm={4}>
                    <img src={require('../images/accessible.png')} width="70" height="70" />
                    <p className='grid-title'>Accessibility</p>
                    <p className="text-tint">Web rich text editing should be for everyone, and that's why we made our Javascript editor compliant with Section 508, WCAG 2.0 and WAI-ARIA.</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Download
