import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';
import BannerData from '../../Data.js/BannerData';

function Banner() {
  return (
    <>

    <Carousel fade>
        {BannerData.map((value) => (
            <Carousel.Item className='position-relative'>
            <img
              className="d-block banner-img-width"
              src={value.image}
              alt="First slide"
            />
            <Carousel.Caption className="position-absolute banner-position text-start">
              <div >
                <h2 className='banner-h2'>{value.title}</h2>
                <p className='py-4 banner-p'>{value.body}</p>
                <button className='p-2 banner-btn'><Link to={'/shop'} className="btn  btn-lg  ">SHOP NOW</Link></button> 
              </div>           
            </Carousel.Caption>
          </Carousel.Item>
        ))}     
    </Carousel>
    
    </>
  );
}

export default Banner;