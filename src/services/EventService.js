import axios from 'axios'
import nprogress from 'nprogress'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // Default value
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

// apiClient.interceptors.request.use(config => {
//   nprogress.start()
//   return config
// })

// apiClient.interceptors.response.use(response => {
//   nprogress.done()
//   return response
// })

//These interceptors fall short when more than one call is happening at a time.

export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
