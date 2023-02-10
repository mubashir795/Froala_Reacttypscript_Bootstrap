import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Plugin() {
  return (
    <>
      <Container>
            <h1 className='top-heading'>Out Of the Box Plugins!</h1>
            <p className='top-des strong'>Plug and play features to create your own version of the Froala WYSIWYG HTML Editor.</p>
        </Container>
        <Container>
            <Row className='align-items-center'>
                <Col sm={3}></Col>
                <Col sm={6} className='GreyBox'>
                    <img src={require('../images/close.io.jpg')} width="56" height="56"/>
                    <p className='TextTitle'>Fantastic Architecture. Simple to extend.</p>
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
                    <img src={require('../images/blocks.png')} width="66" height="66"/>
                    <p className='TextTitle'>30+ Plugins</p>
                    <p className='edit-des'>Our rich text editor has over 30 plugins to choose from and use out of the box in you project.</p>
                </Col>
                <Col sm={3}>
                    <img src={require('../images/play.png')} width="66" height="66"/>
                    <p className='TextTitle'>Plug & Play</p>
                    <p className='edit-des'>Include the plugin you need for the rich text editor and you’re ready to start playing.</p>
                </Col>
                <Col sm={3}>
                    <img src={require('../images/customizeable.png')} width="66" height="66"/>
                    <p className='TextTitle'>Customize</p>
                    <p className='edit-des'>With lots of well documented options for each plugin, the editor can be customized in seconds.</p>
                </Col>
                <Col sm={3}>
                    <img src={require('../images/plugins-2.png')} width="66" height="66"/>
                    <p className='TextTitle'>Extend</p>
                    <p className='edit-des'>All of the plugins’ code is all well commented and simple to use as a basis for your own plugins.</p>
                </Col>
            </Row>
        </Container>
        <MDBContainer>
            <h1 className='PluginHeading'>Froala Plugin</h1>
            <MDBRow className='align-items-center'>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>New Plugin</h3>
                    <p className='PluginCardDes'>Create your custom plugin.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Image</h3>
                    <p className='PluginCardDes'>Create your custom plugin.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Draggable</h3>
                    <p className='PluginCardDes'>Drag and drop elements.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Link</h3>
                    <p className='PluginCardDes'>Advanced link editing.</p>
                </MDBCol>
            </MDBRow>
            <MDBRow className='align-items-center'>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Code View</h3>
                    <p className='PluginCardDes'>View editor content code.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Code Beautifier</h3>
                    <p className='PluginCardDes'>Beautify the code view.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Emoticons</h3>
                    <p className='PluginCardDes'>Makes your users smile.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Font Family</h3>
                    <p className='PluginCardDes'>Select different font type.</p>
                </MDBCol>
            </MDBRow>
            <MDBRow className='align-items-center'>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Font Size</h3>
                    <p className='PluginCardDes'>Change the font size.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Paragraph Format</h3>
                    <p className='PluginCardDes'>Change the paragraph type.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Lists</h3>
                    <p className='PluginCardDes'>Insert lists in the editor.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Table</h3>
                    <p className='PluginCardDes'>Basic and advanced tables.</p>
                </MDBCol>
            </MDBRow>
            <MDBRow className='align-items-center'>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Word</h3>
                    <p className='PluginCardDes'>Clean Word and Excel paste.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Video</h3>
                    <p className='PluginCardDes'>Multiple ways to insert videos.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Line Breaker</h3>
                    <p className='PluginCardDes'>Add new line between blocks.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Inline Class</h3>
                    <p className='PluginCardDes'>Add inline classes on selected text.</p>
                </MDBCol>
            </MDBRow>
            <MDBRow className='align-items-center'>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Inline Style</h3>
                    <p className='PluginCardDes'>Add styles on selected text.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>File</h3>
                    <p className='PluginCardDes'>Upload any kind of files.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Colors</h3>
                    <p className='PluginCardDes'>Background and text colors.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Fullscreen</h3>
                    <p className='PluginCardDes'>Edit content in fullscreen.</p>
                </MDBCol>
            </MDBRow>
            <MDBRow className='align-items-center'>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Char Counter</h3>
                    <p className='PluginCardDes'>Limits or counts characters.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Align</h3>
                    <p className='PluginCardDes'>Align editor content.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Entities</h3>
                    <p className='PluginCardDes'>Use HTML entities.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Help</h3>
                    <p className='PluginCardDes'>See shortcuts in the editor.</p>
                </MDBCol>
            </MDBRow>
            <MDBRow className='align-items-center'>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Line Height</h3>
                    <p className='PluginCardDes'>Change the line height.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Image Manager</h3>
                    <p className='PluginCardDes'>Browse and delete images.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Paragraph Style</h3>
                    <p className='PluginCardDes'>Add style to a paragraph.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Print</h3>
                    <p className='PluginCardDes'>Print editor content.</p>
                </MDBCol>
            </MDBRow>
            <MDBRow className='align-items-center'>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Quick Insert</h3>
                    <p className='PluginCardDes'>Insert elements easier.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Quote</h3>
                    <p className='PluginCardDes'>Add quotes in the editor.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Save</h3>
                    <p className='PluginCardDes'>Enable AJAX saving.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Special Characters</h3>
                    <p className='PluginCardDes'>Insert special characters.</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <MDBContainer>
            <h1 className='PluginHeading'>TUI Editor</h1>
            <MDBRow className='align-items-center'>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Wiris</h3>
                    <p className='PluginCardDes'>Insert special characters.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Tribute.js</h3>
                    <p className='PluginCardDes'>Mentions inside the editor.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>TUI Editor</h3>
                    <p className='PluginCardDes'>Advanced image editing.</p>
                </MDBCol>
                <MDBCol sm={3} className='PluginCard' size='md'>
                    <div className='online-icon'>
                        <FaCode/>
                    </div>
                    <h3 className='PluginCardTitle'>Embed.ly</h3>
                    <p className='PluginCardDes'>Embed rich content.</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>
  )
}

export default Plugin
