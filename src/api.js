import fetch from 'isomorphic-fetch'
import Config from '../conf/configuration'

const baseUrl = `https://pixabay.com/api/?key=${Config.pixabyToken}`

const api = {
  busca: {
    async getList (page = 1, query = 'corusant', perPage = 30) {
      if (query === '') return {}
      const response = await fetch(`${baseUrl}&per_page=${perPage}&page=${page}&q=${query}`)
      const data = await response.json()
      return data
    }
  }
}

export default api
