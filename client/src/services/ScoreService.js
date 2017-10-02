import Api from './Api'
export default {
  score (title) {
    return Api().get('ClaimBuster/' + title)
  }
}
