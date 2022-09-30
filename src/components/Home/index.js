// import { useEffect, useState } from 'react'
import "./index.scss"
import Logo from './Logo'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
// import LogoTitle from '../../assets/images/logo-s.png'

const Home = () => {
    

    return ( 

       <> 
    <div className="container home-page">
    <Logo />
        <div className="text-zone">
            <h1>Hi, <br />I'm  &nbsp;
            {/* <img src={LogoTitle} alt="dev" /> */}
            Adithya
            <br />
Srivastava
</h1>
<h2>
    Developer|Ethusiasist
</h2>
{/* <Link to="/contact" className="flat-button">CONTACT ME</Link> */}
<Link to="/contact" className="flat-button4">
            CONTACT ME
          </Link>
            
        </div>
        
    </div> 
    <Loader type="pacman" />
    </>
    );
}
 
export default Home;