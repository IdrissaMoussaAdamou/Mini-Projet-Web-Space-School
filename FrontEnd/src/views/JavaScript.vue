<template>
    <div>
    <entete></entete>
     <div class="container">
      <div class="row">
        <div class="col">
          <div class="alert alert-info alert-dismissible fade show" role="alert">
              <h5 class="alert-heading">Prérequis</h5>
              <p>Connaissances générales de la terminologie de la programmation orientée objet (classes, objets, fonctions, méthodes, etc.), que vous pourrez acquérir dans le cours <a href="#" class="alert-link">Découvrez le fonctionnement des algorithmes.</a> !</p>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <h1 class="my-3">Apprenez à programmer avec JavaScript</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe 
            width="1028" 
            height="578" src="https://www.youtube.com/embed/02Xs2ySaXcs" 
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
            <li>Utiliser les données et les types de données dans JavaScript.</li>
            <li>Gérer la logique d'un programme en JavaScript (conditions, boucles et erreurs).</li>
            <li>Écrire du code propre et facile à maintenir à l'aide de méthodes en JavaScript.</li>
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
                    <h2><a href="../doc/partie3.pdf" download style="color:green">Partie1</a></h2>
                </b-input-group>
                <br>
                 <b-input-group size="lg">
                    <b-input-group-prepend is-text>
                      <b-icon icon="file-text-fill"></b-icon>
                      </b-input-group-prepend>
                    <h2><a href="../doc/partie4.pdf" download style="color:green">Partie2</a></h2>
                </b-input-group>
              </div>
              <div>
                <h2>Voici quelques Tp Pour vous Familiariser avec le Langage</h2>
                <b-input-group size="lg">
                    <b-input-group-prepend is-text>
                      <b-icon icon="file-text-fill"></b-icon>
                      </b-input-group-prepend>
                    <h2><a href="#" download style="color:green">TP1</a></h2>
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
        <div class="col">
          <hr>
          <h3>Notes</h3>
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
  name: 'JS',
  components: {
    entete,
    Footer
  }
}
</script>