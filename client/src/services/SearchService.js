import Api from './Api'
export default {
  search (keyword) {
    return Api().get('search/' + keyword)
      .then(function (results) {
        const timelineData = results.data.default.timelineData
        const filteredTime = timelineData.filter((e) => e.value[0] > 10)
        console.log(filteredTime)
        return Promise.resolve(filteredTime)
      })
      .catch(function (err) {
        console.error(err)
        return Promise.reject(err)
      })
  }
}
