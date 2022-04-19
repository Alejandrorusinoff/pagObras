import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { setVisibleNavBav } from "../redux/visibleNavBar";
import Viewer from 'react-viewer';
import '../styles/machineryStyles.css'

const imagenes = ([
    require('../images/img11.jpg'),
    require('../images/img23.jpg'),
    require('../images/img24.jpg'),
    require('../images/img29.jpg'),
    require('../images/img30.jpg'),
    require('../images/img32.jpg'),
    require('../images/img33.jpg'),  
    require('../images/img34.jpg'),
    require('../images/img36.jpg'),
    require('../images/img42.jpg'),
])

const Machinery = () => { 
    const [indexImg, setIndexImg] = useState('')
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch()
    const typeMachines = ['Camión','Excavadora', 'Camión', 'Motoniveladora', 'Camión', 'Camión Cisterna', 'Name?', 'Compactador', 'Pala Cargadora Frontal', 'Name?']

    let items = []
    for (let i = 0; i < imagenes.length; i++) {
        items.push({src: imagenes[i], name:typeMachines[i]})
    }

    const ViewImages = ({indexImg, visible}) => {
        let items = []
        imagenes.map(image => items.push({src:image}))
        
        return (
            <div>
                <Viewer
                className="fotos"
                visible={visible}
                onClose={() => { 
                    setVisible(false);
                    dispatch(setVisibleNavBav(true)) 
                }}
                images={items}
                activeIndex={indexImg}
                />
            </div>
        );
    }
    console.log(visible)

    return(
        <div id="machinery">
            <div>
                <h1>EQUIPAMIENTO</h1> 
            </div>
            
            <div className="contarnerImages">
                {items.map((image, index) => 
                <div key={index} className="caja">
                    <button className="buttonImg" 
                        onClick={() =>  {
                            setIndexImg(index); 
                            setVisible(true);
                            dispatch(setVisibleNavBav(false))
                            }}
                        >
                        <img className="sizeImage" src={image.src} alt={image.name}/>
                        <div className="footnote">{image.name}</div>
                    </button>
                </div>)}
            </div>
            <ViewImages indexImg={indexImg} visible={visible}/>
        </div>
    )
}

export default Machinery