import React from 'react'
import ReactDOM from 'react-dom'
// import { Modal } from 'react-bootstrap'

import SearchBox from './SearchBox'
import ResultBoard from './ResultBoard'
import Header from './Header'
import Footer from './Footer'
import LoadingBar from './LoadingBar'

import api from './api'

const numberPerPages = 20

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      results: [],
      pageNumber: 1,
      total: 0,
      totalPages: 1,
      appName: 'Pixaby Searcher with React',
      query: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    return (
      <div>
        <Header title={this.state.appName} />
        <SearchBox onSubmit={this.handleSubmit} />
        <ResultBoard resultList={this.state.results} pages={this.state.totalPages} />
        <LoadingBar showBar={this.state.loading} />
        <Footer />
      </div>
    )
  }

  async handleSubmit (string) {
    // buscar
    // cambiar espacios en blanco por signo '+'
    let res = string.replace(' ', '+')

    const data = await api.busca.getList(1, res, numberPerPages)

    let pages = Math.ceil(data.totalHits / numberPerPages)

    this.setState({
      results: data.hits,
      total: data.totalHits,
      pageNumber: 1,
      totalPages: pages,
      query: res
    })
  }

  handleScroll (event) {
    if (this.state.loading) return null

    if (this.state.pageNumber + 1 > this.state.totalPages) return null

    const scrolled = window.scrollY
    const viewportHeight = window.innerHeight
    const fullHeight = document.body.clientHeight

    if (!(scrolled + viewportHeight + 300 >= fullHeight)) {
      return null
    }

    this.setState({loading: true}, async () => {
      try {
        const data = await api.busca.getList(this.state.pageNumber + 1, this.state.query, numberPerPages)

        this.setState({
          results: this.state.results.concat(data.hits),
          pageNumber: this.state.pageNumber + 1,
          loading: false
        })
      } catch (error) {
        console.error(error)
        this.setState({loading: false})
      }
    })
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
