import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state(){
    return {
        status : 0,
        imageUrl : null,
        doneUploading : false
    }
  },
  mutations: {
      setImageUrl(state, payload) {
          state.imageUrl = payload.url
      },
      setStatus(state, payload) {
          state.status = payload
      },
      setDoneUploading(state, payload) {
          state.doneUploading = payload
      }
  },
  actions : {
      async uploadImage({commit},formData) {
          await axios.post('https://image-uploader-io.herokuapp.com/uploads', formData, {
              header : {
                  'Content-Type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
              }
          }).then(response => {
              commit('setImageUrl', response.data)
              commit('setDoneUploading', true)
          }).catch(err => {
              console.log(err)
          })
      }
  }
})
