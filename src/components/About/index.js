// import { useEffect, useState } from 'react'
import {
  faPython,
  faLinux,
  faGit,
  faNodeJs,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  // const [letterClass, setLetterClass] = useState('text-animate')

  
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            About Me
          
          </h1>
          
          <p id="para1">
          Hey there, I'm Adithya Srivastava a student of National Institute of Technology Hamirpur and 
          currently I'm pursuing my BTech in the field of Computer Science and Engineering.
          I have always been passionate about technology and living in this technology driven 
          world, I have always strived my best to level-up my skill and mindset.
          </p>
          <p id="para1">
            I'm quietly confident, naturally curious, and always leveling myself 
            so that I can give my best shot in every opportunity given to me.
          </p>
          <p id="para1">
            I'm a FullStack Developer and I have explored many different Web Frameworks like React, Django and Express.
            I'm an avid enthusiast of Machine Learning and Computer Vision and currently exploring various fields of research 
            that includes the application of these concepts. I'm also interested in the Medical Image Processing domain and wish 
            to pursue my future work in this domain.

          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNodeJs} color="green" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faLinux} color="black" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About