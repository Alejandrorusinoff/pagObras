import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { setVisibleNavBav } from "../redux/visibleNavBar";
import Viewer from 'react-viewer';
import './moreImagesStyles.css'

const imagenes = ([
    require('../images/img19.jpg'),
    require('../images/img21.jpg'),  
    require('../images/img25.jpg'),
    require('../images/img26.jpg'), 
])


const MoreImages = () => {
    const [visible, setVisible] = useState(false);
    let navigate = useNavigate();
    const dispatch = useDispatch()
    console.log('visible ---> ',visible)

    return(
        <div>
            {visible ? null
            : 
            <button className="buttonImg1" onClick={() =>  { 
                /* setVisible(true);
                console.log(visible)
                dispatch(setVisibleNavBav(true));  */
                navigate('/works')}}>
                <div className="conteinerImages contenedor caja1">
                    {imagenes.map((image, index) => 

                    <div key={index} className="div-img hidden"  >
                        <button className="buttonImg" 
                        onClick={() => {
                        /* setIndexImg(index);  */
                        setVisible(true); 
                        dispatch(setVisibleNavBav(false))
                        }}
                    >
                        <img className="sizeImage1" src={image} alt={image}/>
                        </button>
                    </div>)
                    }
                    <ion-icon id="addImages" name="add-circle-sharp"></ion-icon>
                </div>
            </button> 
            }
        </div>
    )
}

export default MoreImages
