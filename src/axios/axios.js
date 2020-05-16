import axios from 'axios'

export default axios.create({
  //~~~~~~~ for response status 200 ~~~~~~~~~~
  baseURL: 'https://react-quiz-3e9b0.firebaseio.com/'

  //~~~~~~~ for response status 404 ~~~~~~~~~~
  // baseURL: 'https://react-3e9b0.firebaseio.com/'

})