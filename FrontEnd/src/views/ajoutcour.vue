<template>
  <div>
    <entete></entete>
    <div class="sidenav">
      <div class="login-main-text">
        <h2>Page pour ajouter un nouveau cour </h2>
        <p>Indiquez les informations du nouveau cour.</p>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form">
          <form @submit.prevent="ajout">
            <div class="form-group">
              <label>Titre du cour</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="titre"
                  v-model="cour.titre"
                />
            </div>
           <div class="form-group">
              <label>Image pour le cour</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="link"
                  v-model="cour.image"
                />
            </div>
            <div class="form-group">
              <label>Description du cour</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="description"
                  v-model="cour.desc"
                />
            </div>
            <button type="submit" class="btn btn-primary">Valider</button>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/footer";
// @ is an alias to /src
import entete from "../components/Header";

export default {
  name: "Connexion",
  components: {
    entete,
    Footer,
  },
  data: () => ({
    cour: {
        titre:"",
        image:"",
        desc:""
    },
  }),
  methods:{
      ajout:function(){
          this.$store.commit("valider",this.cour);
          console.log(this.$store.state.cours)
          this.$router.push('/Professeurb')
      }
  },
  computed: {
    C() {
      return this.$store.state.cours;
    },
  },
};
</script>
<style scoped>
.sidenav {
  font-family: "Lato", sans-serif;
}

.main-head {
  height: 150px;
  background: #fff;
}

.sidenav {
  height: 100%;
  background-image: url(../assets/back.jpg);
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 2;
    left: 0;
  }

  .login-form {
    margin-top: 50%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}
</style>