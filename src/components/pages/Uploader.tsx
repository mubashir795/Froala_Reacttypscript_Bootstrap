import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Uploader() {
  return (
    <>
      <Container className='bg-dark-color TopSpace'>
        <h1 className='UploaderTophead'>All the power of Sencha grid with the ease of React</h1>
        <p className='top-des strong'>Enhance your forms with a sleek image uploader.</p>
        <Row>
            <Col sm={6}>
                <img src={require('../images/FRO-image-uploader.gif')} width="500" height="436" />
            </Col>
            <Col sm={6}>
                <img src={require('../images/undraw_1.png')} width="77" height="51" />
                <p className='UploaderHeading'>Drag and Drop</p>
                <p className='UploaderDes'>Upload your images just by dragging them to the upload area</p>
                <img src={require('../images/undraw_3.png')} width="77" height="51" />
                <p className='UploaderHeading'>Image Manager Included</p>
                <p className='UploaderDes'>Helps your users browse through or delete images they have uploaded.</p>
                <img src={require('../images/undraw_2.png')} width="77" height="51" />
                <p className='UploaderHeading'>Insert Images From A Link</p>
                <p className='UploaderDes'>Upload images from any location on the web</p>
            </Col>
        </Row>
        <p className='top-des strong TopSpace'>Enhance your forms with a sleek image uploader.</p>
        <div className='plan-btn-style'>
            <Link to='/'>
                <a className='plan-btn'>Download Froala Image Uploader For Free</a>
            </Link>
        </div>
      </Container>
        <Container>
            <h1 className='UploaderTophead'>Features</h1>
            <Row className='box-top-space'>
                <Col sm={3}>
                    <img src={require('../images/weight-love.png')} width="40" height="40"/>
                    <p className='grid-title'>Lightweight</p>
                    <p className='grid-des'>Give your users amazing image uploading experience with less than 50KB file.</p>
                </Col>
                <Col sm={3}>
                    <img src={require('../images/ajax.png')} width="30" height="40"/>
                    <p className='grid-title'>Ajax Ready</p>
                    <p className='grid-des'>Upload images without reloading the page.</p>  
                </Col>
                <Col sm={3}>
                    <img src={require('../images/design-validation.png')} width="40" height="40"/>
                    <p className='grid-title'>File Validation</p>
                    <p className='grid-des'>Limit your users to a specific file type, size, image dimensions, or write your own custom validator.</p>
                </Col>
                <Col sm={3}>
                    <img src={require('../images/fetch-upload-cloud.png')} width="40" height="40"/>
                    <p className='grid-title'>Upload to the Cloud</p>
                    <p className='grid-des'>Send files directly to Amazon’s Storage Service (S3)</p>
                </Col>
            </Row>
            <Row className='box-top-space'>
                <Col sm={3}>
                    <img src={require('../images/customizeable.png')} width="40" height="40"/>
                    <p className='grid-title'>Simple to Style and Customize</p>
                    <p className='grid-des'>It starts with an image placeholder from your choice and pop up menu can be easily styled using CSS</p>
                </Col>
                <Col sm={3}>
                    <img src={require('../images/responsive.png')} width="30" height="40"/>
                    <p className='grid-title'>Responsive design</p>
                    <p className='grid-des'>Use it on any device, the image uploader will automatically adabted to the screen size.</p>  
                </Col>
                <Col sm={3}>
                    <img src={require('../images/progress.png')} width="40" height="40"/>
                    <p className='grid-title'>Progress Bar</p>
                    <p className='grid-des'>Let users know the image uploading progress.</p>
                </Col>
                <Col sm={3}>
                    <img src={require('../images/scale.png')} width="40" height="40"/>
                    <p className='grid-title'>Image Previews & Scaling</p>
                    <p className='grid-des'>Once file is uploaded, the user will be able to preview & resize it.</p>
                </Col>
            </Row>
        </Container>
        <div className='bg-dark-color TopSpace'>
            <Container>
                <Row>
                <Col sm={9}>
                    <p className='gen-title'>By Devs, for Devs</p>
                    <p>Since it's part from Froala Editor, it is developed and maintained by experts.</p>
                    <p>Code quality and architecture, documentation and guides make the<br /> Froala image uploader a pleasure to use for any developer.</p>
                </Col>
                <Col sm={3}>
                    <img src={require('../images/developer-2.png')} width="352" height="190" />
                </Col>
                </Row>
                <Row className='box-top-space'>
                <Col sm={3} >
                    <p className='grid-title'>Blazing Fast</p>
                    <p className='grid-des'>Ten times faster than the blink of an eye, our rich text editor will initialize in less than 40ms.</p>
                </Col>
                <Col sm={3}>
                    <p className='grid-title'>Lightweight</p>
                    <p className='grid-des'>Bring in an amazing editing experience to your application without losing loading speed.</p>  
                </Col>
                <Col sm={3}>
                    <p className='grid-title'>Well Structured</p>
                    <p className='grid-des'>Our engineers came up with a fantastic architecture that made this the best Javascript rich text editor.</p>
                </Col>
                <Col sm={3}>
                    <p className='grid-title'>Secure</p>
                    <p className='grid-des'>We know it’s bullet proof, but don’t take our word for it, just go ahead and hack it. #hackFroala</p>
                </Col>
                </Row>
            </Container>
        </div>
        <Container>
            <h1 className='UploaderTophead'>Get Started</h1>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <ul className='bullets-text'>
                        <li className='bullets-style'><p><Link to='/'><a className='text-read-more'>Install Froala WYSIWYG Editor.</a></Link></p></li>
                        <li className='bullets-style'>Add image element in your HTML file</li>
                        <div className='prettyprint'><span>"img id="logo" src="https://i.ibb.co/g9gGYPX/avatar-g177d581fb-640.png" 
        alt="User placeholder" height="100" </span></div>
                        <li className='bullets-style'>Initialize Froala editor on that image</li>
                        <div className='prettyprint'><span>"const editor = new FroalaEditor('#logo')" </span></div>
                        <li className='bullets-style'>Upload images to your server using our ready SDK or upload to the cloud</li>
                        <div className='prettyprint'><span>"const editor = new FroalaEditor('#logo',<br/> 
                        pluginsEnabled ['image', 'imageManager'],<br/>
                        imageEditButtons ['imageReplace', 'imageRemove'],<br/>
                        imageInsertButtons ['imageBack', '|', 'imageUpload'],<br/>
                        imageDefaultWidth [150],<br/>
                        imageUploadMethod[POST],<br/>
                        // Set the image upload URL.<br/>
                        imageUploadURL ['upload.php'],<br/>

                        imageManagerLoadURL ['image_manager/load_images.php'],<br/>
                        // Set the image delete URL.<br/>
                        imageManagerDeleteURL ['delete_image.php'],<br/>

                        //Validation                           
                        imageAllowedTypes ['jpeg', 'jpg', 'png'],<br/>
                        // Set max image size to 10MB.<br/>
                        imageMaxSize[1024 * 1024 * 10] ,<br/>
        );" </span></div>
                        <li className='bullets-style space'>Upload images to your server using our ready SDK or upload to the cloud</li>
                </ul>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
    </>
  )
}

export default Uploader
