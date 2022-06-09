<template>
    <div>
    <entete></entete>
     <div class="container">
      <div class="row">
        <div class="col">
          <div class="alert alert-info alert-dismissible fade show" role="alert">
              <h5 class="alert-heading">Prérequis</h5>
              <p>Bases en CSS. Si vous ne les maîtrisez pas, suivez ce cours : <a href="#" class="alert-link">Apprenez à créer votre site web avec HTML5 et CSS3</a> !</p>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <h1 class="my-3">Apprendre le CSS</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe 
            width="1028" 
            height="578" 
            src="https://www.youtube.com/embed/PE8FQ6zihhw" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <h2>À la fin de ce cours, vous serez capable de :</h2>
          <ul>
            <li>réaliser vos premières animations CSS ;</li>
            <li>maîtriser les translations, les rotations et l’opacité ;</li>
            <li>réaliser des animations dynamiques.</li>
          </ul>
        </div>
      </div>
      <div class="row mt-3">
          <div class="col">
              <h2>Pour commencer le cours veuillez consulter le ou les fichier(s) pdf ci-dessous </h2>
              <div>
                <b-input-group size="lg">
                    <b-input-group-prepend is-text>
                      <b-icon icon="file-text-fill"></b-icon>
                      </b-input-group-prepend>
                    <h2><a href="../doc/partie2.pdf" style="color:green">Partie1</a></h2>
                </b-input-group>
                <br>
                <b-input-group size="lg">
                    <b-input-group-prepend is-text>
                      <b-icon icon="file-text-fill"></b-icon>
                      </b-input-group-prepend>
                    <h2><a href="../doc/partie3.pdf" style="color:green">Partie2</a></h2>
                </b-input-group>
              </div>
              <div>
                   <h2>Voici quelques Tp Pour vous Familiariser avec le Langage</h2>
                <b-input-group size="lg">
                    <b-input-group-prepend is-text>
                      <b-icon icon="file-text-fill"></b-icon>
                      </b-input-group-prepend>
                    <h2><a href="#" style="color:green">TP1</a></h2>
                </b-input-group>
                <br>
                <b-input-group size="lg">
                    <b-input-group-prepend is-text>
                      <b-icon icon="file-text-fill"></b-icon>
                      </b-input-group-prepend>
                    <h2><a href="#" download style="color:green">TP2</a></h2>
                </b-input-group>
              </div>

          </div>

      </div>
      <div class="row">
                    <a class="btn btn-success stretched-link" href="/Quizhome">Testez vos connaissances en traitant nos QCM a la fin du module</a>
               </div>
      <div class="row">
        <div class="col">
          <hr>
          <h3>Si vous avez quelques questions veillez les écrire ici </h3>
          <form>
            <div class="form-group mt-3">
              <label for="timeInput">Temps :</label>
              <input type="text" class="form-control" id="timeInput" placeholder="mm:ss" aria-describedby="timeHelp">
            </div>
            <div class="form-group mt-3">
              <label for="note">Note :</label>
              <textarea id="note" rows="5" class="form-control" required></textarea>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                  Rendre cette notation publique
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </form>
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
  name: 'CSS',
  components: {
    entete,
    Footer,
    // computed:{
    //   URL(){
    //     return this.$store.state.URLCss;
    //   }
    // }
  }
}
</script>
<style>
.bouton{
  text-align: center;
}
</style>