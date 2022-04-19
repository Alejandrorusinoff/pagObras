import React from "react";
import '../styles/servicesStyles.css'

const Services = () => {
    return(
        <div id="services">
            <div>
                <h1>SERVICIOS QUE OFRECEMOS</h1>
            </div>

            <div className="servicesContainer">
                <div>
                    <ul className="listServices">
                        <li>Servicio1</li>  
                        <li>Servicio2</li> 
                        <li>Servicio3</li>  
                        <li>Servicio4</li> 
                        <li>Servicio5</li> 
                        <li>Servicio6</li> 
                        <li>Servicio7</li> 
                        <li>Servicio8</li> 
                    </ul>  
                </div>
            </div>
        </div>
    )
}

export default Services