<template>
    <div>
        <entete></entete>
              <div class="main">
                     <div class="container">
	<div class="row">
		<!-- <h2>Create your snippet's HTML, CSS and Javascript in the editor tabs</h2> -->
        
        
       <div class="col-md-7 ">

<div class="panel panel-default">
  <div class="panel-heading">  <h4 >User Profile</h4></div>
   <div class="panel-body">
       
    <div class="box box-info">
        
            <div class="box-body">
                     <div class="col-sm-6">
                     <div  align="center"> <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" class="img-circle img-responsive"> 
                
                <!--Upload Image Js And Css-->
           
              
   
                
                
                     
                     
                     </div>
              
              <br>
    
              <!-- /input-group -->
            </div>
            <div class="col-sm-6">
            <h4 style="color:#00b1b1;">retapez vos nouvelles informations </h4>           
            </div>
            <div class="clearfix"></div>
            <hr style="margin:5px 0 5px 0;">
    
              
<form @submit.prevent="handleLogin">
    <div class="col-sm-5 col-xs-6 tital " >First Name:</div>
<div class="col-sm-7 col-xs-6 ">
    <input type="text" class="form-control" placeholder="First Name" v-model="firstname">
</div>
     <div class="clearfix"></div>
<div class="bot-border"></div>

<div class="col-sm-5 col-xs-6 tital " >Last Name:</div>
<div class="col-sm-7">
    <input type="text" class="form-control" placeholder="Last Name" v-model="lastname">
</div>
  <div class="clearfix"></div>
<div class="bot-border"></div>

<div class="col-sm-5 col-xs-6 tital " >User Name:</div>
<div class="col-sm-7">
    <input type="text" class="form-control" placeholder="User Name" v-model="username">
</div>
  <div class="clearfix"></div>
<div class="bot-border"></div>

<div class="col-sm-5 col-xs-6 tital " >Email:</div>
<div class="col-sm-7">
    <input type="e-mail" class="form-control" placeholder="Mail" v-model="mail">
</div>

  <div class="clearfix"></div>
<div class="bot-border"></div>

<div class="col-sm-5 col-xs-6 tital " >Password:</div>
<div class="col-sm-7">
    <input type="password" class="form-control" placeholder="Password" v-model="password1">
</div>

  <div class="clearfix"></div>
<div class="bot-border"></div>
<button type="submit" class="btn btn-success">Modifier</button>
</form>



            <!-- /.box-body -->
          </div>
          <!-- /.box -->

        </div>
       
            
    </div> 
    </div>
</div>
</div>
</div> 
              </div>
        <Footer></Footer>
    </div>
</template>
<style >
/* .main{
    background-image: url(../assets/fond2.png);
} */
 input.hidden {
    position: absolute;
    left: -9999px;
}

#profile-image1 {
    cursor: pointer;
    width: 100px;
    height: 100px;
	border:2px solid #03b1ce ;
}
.tital{ 
    font-size:16px; 
    font-weight:500;
}
.bot-border{ 
    border-bottom:1px #f8f8f8 solid;  
    margin:5px 0  5px 0
}

</style>
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
    // loggedIn(){
    //   return this.$store.state.auth.status.loggedIn
    // }
  },
  methods : {

    // verify(){
    //   if(this.password1===this.password2)
    //     this.bool=true
    // },

    handleLogin(){

     
      this.loading = true

        // this.verify();
        // this.user.username = this.username
        // this.user.password = this.password
         //if(this.bool===true){
        auth.register(this.firstname,this.lastname,this.mail,this.username,this.password1)
        .then((response) => {
           console.log(response)
           this.message = response.data.message3;
           alert("Information Bien Modifier!!!!!!");
           this.$router.push("/")
           auth.logout()
        }).catch(e => {
                this.loading = false
                this.error = true
                this.message = e.response.data.non_field_errors[0]
                console.log(e.response.data.non_field_errors[0])
            })
         //}

        //  else{
        //          alert("Vos mot de passe sont incorect");
        //          location.reload();
        //      }
    }
  }
}
</script>