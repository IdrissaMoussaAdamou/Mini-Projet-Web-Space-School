<template>
  <div>
    <entete></entete>
    <div class="sidenav">
      <div class="login-main-text">
        <h2>Espace Professeur</h2>
        <p>Se Connecter ici pour acceder aux services.</p>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form">
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label>User Name</label>
              <b-input-group class="mb-2">
                <b-input-group-prepend is-text>
                  <b-icon icon="person-fill"></b-icon>
                </b-input-group-prepend>
                <input
                  type="text"
                  class="form-control"
                  placeholder="User Name"
                  v-model="username"
                />
              </b-input-group>
            </div>
            <div class="form-group">
              <label>Password</label>
              <b-input-group size="lg">
                <b-input-group-prepend is-text>
                  <b-icon icon="lock"></b-icon>
                </b-input-group-prepend>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="password"
                />
              </b-input-group>
            </div>
            <button type="submit" class="btn btn-success">Valider</button>
            <!-- <div v-if="message !== '' && message === 'success'">
              <span>Connection success</span>
            </div>
            <div v-if="message !== '' && message === 'failed'">
              <span>Connection failed</span>
            </div> -->
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
import auth from "../services/AuthService";

export default {
  name: "Connexionprof",
  components: {
    entete,
    Footer,
  },
  data: () => ({
    username: "",
    password: "",
    user: {},
    loading: false,
    error: false,
    message: "",
  }),

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    handleLogin() {
      this.loading = true;

      auth
        .login(this.username, this.password)
        .then((response) => {
          this.loading = false;
          localStorage.setItem("token2", response.data);
          this.message = response;
          if(localStorage.token2){this.$router.push("/Professeurb");}
          else{alert("Information incorrect")}
        })
        .catch((e) => {
          alert("verifier vos informations")
          this.loading = false;
          this.error = true;
          this.message = e.response.data.non_field_errors[0];
          console.log(e.response.data.non_field_errors[0]);
        });
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
