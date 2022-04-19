import React, {useState} from "react";
import Viewer from 'react-viewer';
import MoreImages from '../components/moreImages'
import '../styles/worksStyles.css'

const imagenes = ([
    require('../images/img1.jpg'),
    require('../images/img2.jpg'),
    require('../images/img3.jpg'),
    require('../images/img4.jpg'),
    require('../images/img10.jpg'),
    require('../images/img11.jpg'),
    require('../images/img12.jpg'),
    require('../images/img19.jpg'),
    require('../images/img21.jpg'),  
    require('../images/img25.jpg'),
    require('../images/img26.jpg'), 
    require('../images/img27.jpg'),
    require('../images/img30.jpg'),
    require('../images/img31.jpg'),
    require('../images/img36.jpg'),
    require('../images/img37.jpg'),
    require('../images/img38.jpg'), 
    require('../images/img40.jpg'),
    require('../images/img45.jpg'),  
    require('../images/img46.jpg'),
    require('../images/img47.jpg'),
    require('../images/img48.jpg'),
    require('../images/img49.jpg'),
    require('../images/img50.jpg'), 
    require('../images/img52.jpg'),
    require('../images/img53.jpg'),
    require('../images/img54.jpg'),
    require('../images/img55.jpg'),
    require('../images/img56.jpg'),
    require('../images/img57.jpg'), 
    require('../images/img58.jpg'),
])

const ViewMoreWorks = () => {
    const [indexImg, setIndexImg] = useState('')
    const [visible, setVisible] = useState(false);

    let items = []
    for (let i = 0; i < imagenes.length; i++) {
        items.push({src: imagenes[i]})
    }

    const ViewImages = ({indexImg, visible}) => {
        let items = []
        imagenes.map(image => items.push({src:image}))
        
        return (
            <div>
                <Viewer
                className="fotos"
                visible={visible}
                onClose={() => { setVisible(false); } }
                images={items}
                activeIndex={indexImg}
                />
            </div>
        );
    }

    return(
        <div id="works">
            <div>
                <div><h1>OBRAS</h1></div>
            </div>
    
            <div className="contarnerImages contenedor">
                {imagenes.map((image, index) => 
                <div key={index} class="div-img hidden caja1"  >
                    <button className="buttonImg" onClick={() =>  {setIndexImg(index); setVisible(true)}}>
                        <img className="sizeImage" src={image} alt={image}/>
                        
                    </button>
                </div>)}
            </div>
            <ViewImages indexImg={indexImg} visible={visible}/>
        </div>
    )
}

export default ViewMoreWorks

