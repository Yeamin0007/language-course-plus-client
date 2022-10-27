import React from 'react';
import { Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Home = () => {
   
    return (

      
      
        <div className='container my-5'>

          <h1 className='text-warning text-center mb-5'>WITH LANGUAGES YOUR AT HOME ANYWHERE.</h1>

            <div className='d-flex justify-content-center'>
            <Carousel className='w-50 '>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/01/google-international-search-61e9caa88c9a2-sej-1520x800.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.betranslated.com/wp-content/uploads/2019/09/learn-foreign-languages.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://elearningindustry.com/wp-content/uploads/2020/02/how-to-create-an-online-language-learning-platform.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
    </Carousel>
            </div>
            <div className='mt-5  bg-info rounded-3'>
              <div className='p-5 text-center text-align-center text-white'>
                <h2 className='fw-bold'>Learn With Fun</h2>
                <p className='fw-semibold'><span className='fs-2 fw-bold'>"</span>There’s no time like the present to learn a new language. And whether you prefer the desktop over your mobile, or you’re looking for additional resources to learn a language, there are TONS of options out there. Courseplus offers access to over 60 million users around the world. The platform online allows you to use some free features, including reading, writing, speaking and listening lessons. You can also network with other language learners. While they do have flashcard resources, the main benefit is in the user’s ability to work directly with native speakers. Using your webcam, audio connection, or the Busuu chat window, you can ask and answer various questions to real people.<span className='fs-2 fw-bold'>"</span></p>
                <Button variant='outline-warning'><Link className='text-decoration-none text-white'to='/courses'>Get Started</Link></Button>
              </div>
            </div>
        </div>
    );
};

export default Home;