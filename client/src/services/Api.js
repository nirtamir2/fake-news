import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://us-central1-fake-news-1e90a.cloudfunctions.net/api`,
    headers: { 'Access-Control-Allow-Origin': 'https://us-central1-fake-news-1e90a.cloudfunctions.net' }
  })
}
