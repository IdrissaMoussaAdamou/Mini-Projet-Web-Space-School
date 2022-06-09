<template>
                 <div class="row" id="lessonList1">
                 
                            <div class="col-12 col-lg-4" v-for="item in this.$store.state.cours" :key="item.titre">
                                 <div class="card mb-4 mb-lg-0 border-light shadow-lg">
                                     <img v-bind:src="item.image"  class="card-img-top">
                                       <div class="card-body">
                                          <h5 class="card-title">{{item.titre}}</h5>
                                           <p class="card-text">{{item.desc}}</p>
                                           <button type="button" class="btn btn-danger" v-on:click="supprime">Suprimer</button>
                                       </div>
                                 </div>
                           </div>
    
                 </div>

</template>
<script>


export default {
  name: 'cp',
  components: {
  },
   data: () => ({
    courses:[],
  }),
  methods:{
    supprime:function(){
      if(confirm("Etes vous sur de bien vouloir suprimer ce cour ?")){
          this.$store.commit("suprimer");
          console.log(this.$store.state.cours)
          location.reload();
      }  
      }
  },
    computed: {
    C() {
      return this.$store.state.cours;
    },

  },
  // mounted(){
  //   console.log(this.$store.state.cours);
  // }
}
</script>
