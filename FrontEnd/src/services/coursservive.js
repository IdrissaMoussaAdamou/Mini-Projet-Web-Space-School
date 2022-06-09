import axios from 'axios'

const API_URL = 'https://connexionelearn.free.beeceptor.com'
class CoursService {
  getAll() {
    return axios.get(API_URL + "/courses/get")
  }

//   getTCours(id){
//     return http.get(`/cours/teacher/${id}`)
//   }
  
  // updateCours(id, data) {
  //   return http.put(`course/${id}/`, {
  //       title : data.title,
  //       image: data.image,
  //       pdf: data.pdf
  //   })
  // }

  
  createCours(data) {
    return axios.post(API_URL + "/course/new", {
        title : data.title,
        // author: data.author,
        image: data.image,
        // pdf: data.pdf
        desc: data.desc,
    })
  }

  deleteCours(id) {
    return axios.delete(API_URL + "course/delete")
  }

}

export default new CoursService()