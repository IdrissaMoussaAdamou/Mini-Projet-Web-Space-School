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
            <h5 class="card-title">Créez des animations CSS</h5>
            <p class="card-text">Vous allez plonger dans le monde des animations CSS pour donner vie à vos pages web !</p>
             <a class="btn btn-primary stretched-link" href="/CSS">Démarrer l'apprentissage</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-light shadow-lg">
          <img src="../assets/js.jpeg" alt="Programmation JavaScript" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Programmer avec JavaScript</h5>
            <p class="card-text">Ce cours est conçu pour vous enseigner les bases du langage de programmation JavaScript.</p>
             <a class="btn btn-danger stretched-link" href="/JavaScript">Démarrer l'apprentissage</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-light shadow-lg">
          <img src="../assets/HTML.png" alt="Programmation HTML" class="card-img-top" height="198px">
          <div class="card-body">
            <h5 class="card-title">Les fondamentaux du HTML</h5>
            <p class="card-text">Vous souhaitez créer vos propres sites web ? Dans ce cours, vous apprendrez comment utiliser HTML5 et CSS3.</p>
            <a href="/HTML" class="btn btn-success stretched-link">Démarrer l'apprentissage</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3" id="lessonList2">
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-light shadow-lg">
          <img src="../assets/laravel.png" alt="Laravel" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Découvrez le framework PHP Laravel</h5>
            <p class="card-text">Vous pratiquez PHP et vous savez créer des sites ? Vous avez l'impression de réécrire souvent les mêmes choses ?  Alors vous avez besoin d'un framework PHP et Laravel constitue actuellement ce qui se fait de mieux en la matière !</p>
            <routeur-link to="/" class="btn btn-warning stretched-link">Démarrer l'apprentissage</routeur-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-light shadow-lg">
          <img src="../assets/asp.png" alt="ASP.NET MVC" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Introduction à ASP.NET MVC</h5>
            <p class="card-text">Alors, ASP.NET MVC c’est quoi ? Ça va vraiment me permettre de créer des sites web ? Pourquoi utiliser ASP.NET MVC plutôt qu’autre chose ? De quoi ai-je besoin pour commencer à apprendre ASP.NET MVC ? Voilà tout ce que nous allons apprendre dans ce chapitre.</p>
            <routeur-link to="/" class="btn btn-secondary stretched-link">Démarrer l'apprentissage</routeur-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card mb-4 mb-lg-0 border-light shadow-lg">
          <img src="../assets/node.png" alt="node" class="card-img-top" height="150px">
          <div class="card-body">
            <h5 class="card-title">Full stack:Node.js, Express et MongoDB</h5>
            <p class="card-text">JavaScript reste-t-il uniquement un langage de front-end ? Plus maintenant ! Avec Node, Express et MongoDB, vous pouvez utiliser vos compétences de ninja JavaScript pour le back-end !</p>
           <routeur-link to="/" class="btn btn-info stretched-link">Démarrer l'apprentissage</routeur-link>
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
  name: 'cb',
  components: {
    entete,
    Footer
  },
   data: () => ({
    courses:[],
  }),
  methods:{
    
  }
}
</script>
