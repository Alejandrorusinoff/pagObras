import React from "react";
import logo from '../images/img9.jpg'
import ScrollImages from "./carousel";
import { useSelector } from "react-redux";
import '../styles/navbarStyles.css'
import '../styles/homeStyles.css'

const NavBar = () => {
    const visibleNavBar = useSelector(state => state.visibleNavBar)
    console.log(visibleNavBar)

    return(
        <div>
            {visibleNavBar ? 
                <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-custom" >  
                    <div className="col-sm-5 logo">
                        <a class="navbar-brand" href="#"><img className="logo1" src={logo} alt=""/></a>
                    </div>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse col-sm-7 logo" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#organization">NUESTRA EMPRESA</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">SERVICIOS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#politics">POLÍTICA</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#works">OBRAS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#machinery">EQUIPAMIENTO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            :
                null
            }
            <ScrollImages/>
            {/* <div className="parpadea text">
                <a className="links" href="https://wa.me/595985728995" target="_blank">
                    <div>
                        <ion-icon id="whatsapp1" name="logo-whatsapp"></ion-icon>
                    </div>
                </a>
            </div> */}
        </div>
    )
}

export default NavBar