<template>
  <div class="home">
    <entete></entete>
    <div class="container">
    <div class="row mb-4 mt-0">
      <div class="col">          
        <div id="carouselControls" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselControls" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselControls" data-slide-to="1"></li>
                    <li data-target="#carouselControls" data-slide-to="2"></li>
                    <li data-target="#carouselControls" data-slide-to="3"></li>
                </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/apprenant3.jpg" class="d-block w-80" alt="apprenant">
            </div>
            <div class="carousel-item">
              <img src="../assets/apprenant.jpg" class="d-block w-100" alt="apprenant2">
            </div>
            <div class="carousel-item">
              <img src="../assets/apprenant4.jpg" class="d-block w-100" alt="apprenant2">
            </div>
            <div class="carousel-item">
              <img src="../assets/apprenant2.jpg" class="d-block w-100" alt="apprenant2">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>          
        </div>        
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-primary shadow-lg">
          <img src="../assets/certificate.png" alt="certificate" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Get Certified</h5>
            <p class="card-text">Get full certification for life in Zero G!</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-primary shadow-lg">
            <img src="../assets/instruction.png" alt="instructor" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">Learn From the Best</h5>
            <p class="card-text">Our instructors are out of this world!</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-primary shadow-lg">
          <img src="../assets/job.png" alt="job search" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Job Guarantee</h5>
            <p class="card-text">Reach for the Stars with your career!</p>
          </div>
        </div>
      </div>
    
    </div>
    
  </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/footer'
// @ is an alias to /src
import entete from "../components/Header"

export default {
  name: 'Home',
  components: {
    entete,
    Footer
  }
}
</script>
