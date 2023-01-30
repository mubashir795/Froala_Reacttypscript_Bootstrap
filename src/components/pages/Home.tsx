import React from 'react'
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <Container>
        <h1>The Next Generation WYSIWYG HTML Editor</h1>
        <div className='feature-img'>
            <a href='/'>
            <img src={require('../images/MultiFeatureDemo3.gif')}/>
            </a>
        </div>
    </Container>
  )
}

export default Home;
