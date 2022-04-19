import React from "react";
import ScrollImages from "./carousel";
import '../styles/homeStyles.css'
import '../styles/navbarStyles.css'

const Home = () => {
    return(
        <div className="home">
            <ScrollImages/>
            <div className="parpadea text">
                <a className="links" href="https://wa.me/595985728995" target="_blank">
                    <div>
                        <ion-icon id="whatsapp1" name="logo-whatsapp"></ion-icon>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Home



