<template>
    <div class="Cours">
    <entete></entete>
       <div class="container">
    <div class="row my-3">
      <div class="col">
        <h1>Cours</h1>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <input class="form-control" id="searchInput" type="text" placeholder="Search..">
       </b-input-group>
      </div>
    </div>
    <div class="row" id="lessonList1">
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-light shadow-lg">
          <img src="../assets/css.jpeg" alt="Animations CSS modernes" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Quiz CSS</h5>
    
             <a class="btn btn-primary stretched-link" href="/Quizcss">Démarrer le quiz</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-light shadow-lg">
          <img src="../assets/js.jpeg" alt="Programmation JavaScript" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Quiz JavaScript</h5>
             <a class="btn btn-danger stretched-link" href="/JavaScript">Démarrer le Quiz</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-light shadow-lg">
          <img src="../assets/HTML.png" alt="Programmation HTML" class="card-img-top" height="193px">
          <div class="card-body">
            <h5 class="card-title">Quiz HTML</h5>
            
            <a href="/HTML" class="btn btn-success stretched-link">Démarrer le Quiz</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3" id="lessonList2">
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-light shadow-lg">
          <img src="../assets/laravel.png" alt="Laravel" class="card-img-top" height="170px">
          <div class="card-body">
            <h5 class="card-title">Quiz PHP Laravel</h5>
            
            <routeur-link to="/" class="btn btn-warning stretched-link">Démarrer le Quiz</routeur-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-light shadow-lg">
          <img src="../assets/asp.png" alt="ASP.NET MVC" class="card-img-top" height="170px">
          <div class="card-body">
            <h5 class="card-title">Quiz ASP.NET MVC</h5>
            <routeur-link to="/" class="btn btn-secondary stretched-link">Démarrer le Quiz</routeur-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-light shadow-lg">
          <img src="../assets/node.png" alt="node" class="card-img-top" height="170px">
          <div class="card-body">
            <h5 class="card-title">Quiz Node.js</h5>
           
           <routeur-link to="/" class="btn btn-info stretched-link">Démarrer le Quiz</routeur-link>
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
  name: 'Quiz',
  components: {
    entete,
    Footer
  },
//   created(){
//     location.reload();
//   },
   data: () => ({
    courses:[],
  }),
  methods:{
    
  }
}
</script>