import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Docs() {
  return (
    <>
    <Container>
        <h1>Documentation</h1>
        <p>Learn how to use Froala WYSIWYG HTML Editor starting with the Quick Start Guide and API basics; going all the way to more complex how-to guides and examples.</p>
        <Row>
            <Col sm={4} className="doc-card">
                <h3 className='text-light'>Getting Started</h3>
                <img className='entered lazyloaded' src={require('../images/settings.png')} width="40" height="40" />
                <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                <div className='btn-inline'>
                    <Link to='/'>
                        <a className='btn r-btn highlight'>Learn more</a>
                    </Link>
                </div>
            </Col>
            <Col sm={4} className="doc-card">
                <h3 className='text-light'>Migration Guides</h3>
                <img className='entered lazyloaded' src={require('../images/archive.png')} width="40" height="40" />
                <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                <div className='btn-inline'>
                    <Link to='/'>
                        <a className='btn r-btn highlight'>Learn more</a>
                    </Link>
                </div>
            </Col>
            <Col sm={4} className="doc-card">
                <h3 className='text-light'>Concepts</h3>
                <img className='entered lazyloaded' src={require('../images/file-text.png')} width="40" height="40" />
                <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                <div className='btn-inline'>
                    <Link to='/'>
                        <a className='btn r-btn highlight'>Learn more</a>
                    </Link>
                </div>
            </Col>
        </Row>
        <Row>
            <Col sm={4} className="doc-card">
                <h3 className='text-light'>API</h3>
                <img className='entered lazyloaded' src={require('../images/sliders.png')} width="40" height="40" />
                <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                <div className='btn-inline'>
                    <Link to='/'>
                        <a className='btn r-btn highlight'>Learn more</a>
                    </Link>
                </div>
            </Col>
            <Col sm={4} className="doc-card">
                <h3 className='text-light'>Framework Plugins</h3>
                <img className='entered lazyloaded' src={require('../images/package.png')} width="40" height="40" />
                <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                <div className='btn-inline'>
                    <Link to='/'>
                        <a className='btn r-btn highlight'>Learn more</a>
                    </Link>
                </div>
            </Col>
            <Col sm={4} className="doc-card">
                <h3 className='text-light'>Server Integrations</h3>
                <img className='entered lazyloaded' src={require('../images/framer.png')} width="40" height="40" />
                <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                <div className='btn-inline'>
                    <Link to='/'>
                        <a className='btn r-btn highlight'>Learn more</a>
                    </Link>
                </div>
            </Col>
        </Row>
        <Row>
            <Col sm={4} className="doc-card">
                <h3 className='text-light'>Server SDKs</h3>
                <img className='entered lazyloaded' src={require('../images/server.png')} width="40" height="40" />
                <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                <div className='btn-inline'>
                    <Link to='/'>
                        <a className='btn r-btn highlight'>Learn more</a>
                    </Link>
                </div>
            </Col>
            <Col sm={4} className="doc-card">
                <h3 className='text-light'>Plugins</h3>
                <img className='entered lazyloaded' src={require('../images/plus-square.png')} width="40" height="40" />
                <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                <div className='btn-inline'>
                    <Link to='/'>
                        <a className='btn r-btn highlight'>Learn more</a>
                    </Link>
                </div>
            </Col>
            <Col sm={4} className="doc-card">
                <h3 className='text-light'>Examples</h3>
                <img className='entered lazyloaded' src={require('../images/book-open.png')} width="40" height="40" />
                <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                <div className='btn-inline'>
                    <Link to='/'>
                        <a className='btn r-btn highlight'>Learn more</a>
                    </Link>
                </div>
            </Col>
        </Row>
    </Container>
    <div className='bg-dark-color'>
        <Container>
            <h1 className='top-heading'>Still Have Questions?</h1>
            <p className='top-des'>If you can't find an answer, check out our Help Center page or contact our Support team.</p>
        </Container>
    </div>
    </>
  )
}

export default Docs
