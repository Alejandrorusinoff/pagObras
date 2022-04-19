import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel'
import '../styles/worksStyles.css'
import '../styles/carousel.css'

const imagenes = ([
  require('../images/img1.jpg'),
  require('../images/img2.jpg'),
  require('../images/img3.jpg'),
  require('../images/img4.jpg'),
  require('../images/img10.jpg'),
  require('../images/img11.jpg'),
  require('../images/img12.jpg'),
  require('../images/img14.jpg'), 
  require('../images/img15.jpg'),
  require('../images/img16.jpg'),
  require('../images/img17.jpg'),
  require('../images/img18.jpg'),
  require('../images/img19.jpg'),
  require('../images/img20.jpg'),
  require('../images/img21.jpg'),  
  require('../images/img22.jpg'),
  require('../images/img23.jpg'),
  require('../images/img24.jpg'),
  require('../images/img25.jpg'),
  require('../images/img26.jpg'), 
  require('../images/img27.jpg'),
  require('../images/img28.jpg'),
  require('../images/img29.jpg'),
  require('../images/img30.jpg'),
])

let items = []
imagenes.map(image => items.push({src:image}))

function ScrollImages() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div className="containerCarousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {imagenes.map((image, index) => 
          <Carousel.Item key={index}>
              <img className="imageSize" src= {image} />
          </Carousel.Item>
          )} 
        </Carousel>
      </div>
    );
  }
  
export default ScrollImages;
