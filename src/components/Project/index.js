import "./index.scss"
// import {Link} from "react-router-dom";
import Work from '../../assets/images/workproject.png'
import IQA from '../../assets/images/IQA_VQA.png'
import Blog from '../../assets/images/Blog.png'
import CIFAR from '../../assets/images/CIFAR.png'
import MNIST from '../../assets/images/MNIST.png'
import Fashion from '../../assets/images/FASHION.png'
import Gym from '../../assets/images/gym.png'
const Project = () => {
    return ( 
       
        <div className="container project-page">
            <div className="imagework">
            <img  src={Work} alt="workdp" align="right" />
            </div>
        <div className="text-zoneproj">
          <h1>
           My Projects
          
          </h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">

  <div class="col">
    <div class="card">
      <img src={IQA} id="new_vqa" alt="{IQA}"/>
      <div class="card-body">
        <h5 class="card-title">Video and Image Quality Assessment</h5>
        <p class="card-text">In this project we analyzed the quality of given video or image using deep learning techniques.
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Blog} id="blog" alt="{Blog}"/>
      <div class="card-body">
        <h5 class="card-title">Blog Site</h5>
        <p class="card-text">A FullStack Application where a user can create and post any blog and view others' blogs too.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={CIFAR} id="cifar" alt="{CIFAR}"/>
      <div class="card-body">
        <h5 class="card-title">CIFAR10 Analysis</h5>
        <p class="card-text">Analysis of CIFAR10 using CNN and employed various techniques like learningrate scheduler and gradient clipping to enhance the accuracy of the model.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={MNIST} class="card-img-top" alt="{MNIST}"/>
      <div class="card-body">
        <h5 class="card-title">MNIST Classification</h5>
        <p class="card-text">Created a Feed Forward Neural Network to classify handwritten digits using the MNIST dataset.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Fashion} class="card-img-top" alt="{Fashion}"/>
      <div class="card-body">
        <h5 class="card-title">Fashion MNIST</h5>
        <p class="card-text">In this project we used a deep learning technique called CNN to classify different types of clothes.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Gym} class="card-img-top" id="gym" alt="{Gym}"/>
      <div class="card-body">
        <h5 class="card-title">Gym APP</h5>
        <p class="card-text">A FullStack Application where the user can avail all the benefits and services provided by the gym from our app.</p>
      </div>
    </div>
  </div>
  
</div>

        </div>

        <a href="https://github.com/AdithyaSrivastava01" target="_blank" rel="noreferrer" className="flat-button67">
            VIEW MORE ON GITHUB
          </a>
        </div>
        
       
     );
}
 
export default Project;