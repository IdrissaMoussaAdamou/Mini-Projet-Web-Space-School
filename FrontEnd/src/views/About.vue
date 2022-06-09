<template>
  <div class="about">
    <entete></entete>
    <h1>Information nous concernant</h1>
    <p>Developper par Idrissa Moussa Adamou et Abdoul Razak Adda Issa de La Fac des science de Monastir pour leur Mini&ndash;Projet du cours Programmation web</p>
    <div>
		<h2>Contactez nous</h2>
		<p>Adresse : {{ address }}</p>
		<p>Téléphone : {{ phone }}</p>
		<p>Email : {{ email }}</p>
		<p>Horaires :</p>
		<ul>
			<li>L-V: 06:00 à 16:00</li>
			<li>Samedi: 07:00 à 14:00</li>
			<li>Dimanche: 07:00 à 12:00</li>
		</ul>
	</div>
    <footer>
       <Footer></Footer>
    </footer>
  </div>
</template>
<script>
import Footer from '../components/footer'
// @ is an alias to /src
import entete from "../components/Header"
export default {
  name: 'about',
  data() {
		return {
			address: "18 avenue du Beurre, Paris, France",
			email: "hello@cafewithavue.bakery",
			phone: "58 748 857"
		}
	},
  components: {
    entete,
    Footer
	}
}
</script>
<style scoped>
div{
  text-align: center;
}
</style>
