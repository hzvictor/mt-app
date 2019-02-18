import axios from '@/axios'

var api = {
  searchHotWord(params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getSeachList(params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  getMenuList() {
    return axios.get('/api/meituan/index/nav.json')
  },
  resultsByKeywords() {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProducts(params) {
    return axios.get('/api/meituan/list/goodsList.json');
  },
  getCurPoisition(params) {
    return axios.get('/api/meituan/city/getPosition.json', params)
  },
  getProvinceList(params) {
    return axios.get('/api/meituan/city/province.json', params)
  },
  getCityList(params) {
    return axios.get('/api/meituan/city/cityList.json', params)
  },
  getHotCity(params) {
    return axios.get('/api/meituan/city/hot.json', params)
  },
  getRecentCity(params) {
    return axios.get('/api/meituan/city/recents.json', params)
  },
  register(params) {
    return axios.get('/api/meituan/register', params)
  },
  login(params) {
    return axios.get('/api/meituan/login', {
      params
    })
  }
}

export default api
