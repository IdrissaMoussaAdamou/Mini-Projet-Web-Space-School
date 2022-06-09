<template>
    <div>
<entete></entete>
 <div class="sidenav">
         <div class="login-main-text">
            <h2>Page d&apos;Inscription<br>de l&apos;application</h2>
            <p>Veuillez remplir les champs avec vos informations personnels.</p>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form @submit.prevent="handleLogin">
                   <div class="form-group">
                        <label>First Name</label>
                       <b-input-group class="mb-2">
                     <b-input-group-prepend is-text>
                     <b-icon icon="person-fill"></b-icon>
                     </b-input-group-prepend>
                     <input type="text" class="form-control" placeholder="First Name" v-model="firstname">
                     </b-input-group>
                  </div>
                  <div class="form-group">
                     <label>Last Name</label>
                     <b-input-group class="mb-2">
                     <b-input-group-prepend is-text>
                     <b-icon icon="person-fill"></b-icon>
                     </b-input-group-prepend>
                     <input type="text" class="form-control" placeholder="Last Name" v-model="lastname">
                     </b-input-group>
                  </div>
                  <div class="form-group">
                      <label>Mail</label>
                       <b-input-group size="lg">
                      <b-input-group-prepend is-text>
                      <b-icon icon="envelope"></b-icon>
                      </b-input-group-prepend>
                     <input type="e-mail" class="form-control" placeholder="Mail" v-model="mail">
                     </b-input-group>
                  </div>
                  <div class="form-group">
                     <label>User Name</label>
                     <b-input-group class="mb-2">
                     <b-input-group-prepend is-text>
                     <b-icon icon="person-fill"></b-icon>
                     </b-input-group-prepend>
                     <input type="text" class="form-control" placeholder="User Name" v-model="username">
                     </b-input-group>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <b-input-group size="lg">
                      <b-input-group-prepend is-text>
                      <b-icon icon="lock"></b-icon>
                      </b-input-group-prepend>
                     <input type="password" class="form-control" placeholder="Password" v-model="password1">
                     </b-input-group>
                  </div>
                  <div class="form-group">
                     <label>Confirm Password</label>
                      <b-input-group size="lg">
                      <b-input-group-prepend is-text>
                      <b-icon icon="lock"></b-icon>
                      </b-input-group-prepend>
                     <input type="password" class="form-control" placeholder="Password" v-model="password2">
                     </b-input-group>
                  </div>
                  <button type="submit" class="btn btn-success">Valider</button>
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
import auth from "../services/AuthService"

export default {
  name: 'Home',
  components: {
    entete,
    Footer
  },
   data: () => ({
    firstname:"",
    lastname:"",
    mail:"",
    username: "",
    password1: "",
    password2:"",
    // user: {},
    loading: false,
    error: false,
    message: "",
    bool:false,
    bu:false
  }),

  computed: {
    loggedIn(){
      return this.$store.state.auth.status.loggedIn
    }
  },
  methods : {

    verify(){
      if(this.password1===this.password2)
        this.bool=true
    },

    handleLogin(){

     
      this.loading = true

        this.verify();
        // this.user.username = this.username
        // this.user.password = this.password
         if(this.bool===true){
        auth.register(this.firstname,this.lastname,this.mail,this.username,this.password1)
        .then((response) => {
        //    localStorage.setItem("token3", response.data.message3);
           console.log(response)
           this.message = response.data.message3;
           this.$router.push("/Connexion")
           alert("Vous vous êtes bien inscrit!!!!!!");
        }).catch(e => {
                this.loading = false
                this.error = true
                this.message = e.response.data.non_field_errors[0]
                console.log(e.response.data.non_field_errors[0])
            })
         }

         else{
                 alert("Vos mot de passe sont incorect");
                 location.reload();
             }
    }
  }
}
</script>
<style scoped>
.sidenav {
    font-family: "Lato", sans-serif;
}



.main-head{
    height: 150px;
    background: #FFF;
   
}

.sidenav {
    height: 100%;
    /* background-color:DarkSlateGray; */
    background-image: url(../assets/back.jpg);
    overflow-x: hidden;
    padding-top: 20px;
}


.main {
    padding: 0px 10px;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}

@media screen and (min-width: 768px){
    .main{
        margin-left: 40%; 
    }

    .sidenav{
        width: 40%;
        position: fixed;
        z-index: 1;
        top: 2;
        left: 0;
    }

    .login-form{
        margin-top: 5%;
    }

    .register-form{
        margin-top: 20%;
    }
}


.login-main-text{
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}

.login-main-text h2{
    font-weight: 300;
}

.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>