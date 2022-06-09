<template>
  <div class="bg-dark">
    <div class="container">
      <div class="row">
        <nav class="col navbar navbar-expand-lg navbar-dark">
          <router-link class="navbar-brand  btn btn-dark" to="/">
            <img src="../assets/logo.png" width="50" height="50" alt="Space Logo" />
            Space School
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarContent" class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-link  btn btn-dark" to="/">Home</router-link>
              </li>
              <li class="nav-item active">
                <router-link class="nav-link  btn btn-dark" to="/Cours">Cours</router-link>
              </li>
            </ul>
            <div class="navbar-nav ml-auto">
               <input class="form-control mr-sm-2" type="search" placeholder="Search">
            </div>
            <ul class="navbar-nav ml-auto">
                 <li class="nav-item active">
                   <div v-if="token" class="nav-item active">
                     <button type="submit" class="nav-link ml-auto btn btn-dark " v-on:click="logout">Deconnexion</button>
                   </div>
                   <div v-else class="nav-item active">
                    <router-link class="nav-link ml-auto btn btn-dark " to="/Connexion">Connexion</router-link>
                   </div>
                 </li>
              <li class="nav-item active">
                <router-link class="nav-link ml-auto btn btn-dark" to="/Inscrire">S&apos;incrire</router-link>
              </li>
              <li class="nav-item active">
                   <div v-if="token2" class="nav-item active">
                     <button type="submit" class="nav-link ml-auto btn btn-dark  " v-on:click="logoutprof">DeconnexionProf</button>
                   </div>
                   <div v-else class="nav-item active">
                    <router-link class="nav-link ml-auto btn btn-dark " to="/connexprof">Espace Prof</router-link>
                   </div>
              </li>
              <li v-if="token" class="nav-item active">
                <router-link class="nav-link ml-auto btn btn-dark " to="/profile">Profil</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>    
  </div>    
</template>
<script>
import auth from "../services/AuthService";
export default {
 
  computed: {
    token() {
      return localStorage.token
    },
   token2() {
      return localStorage.token2
    }
  },
  methods:{

    logout(){
      if(confirm("Etes vous sur de bien vouloir vous déconnectez ?")){
        auth.logout()
      this.$router.push('/')
       location.reload()
      }
    },
    logoutprof(){
      if(confirm("Etes vous sur de bien vouloir vous déconnectez ?")){
         auth.logoutprof()
      this.$router.push('/')
      location.reload()
      }
    },
  }  
}
</script>