import React from 'react'
import styled from 'styled-components'

import SearchBar from './search-bar'
import ImageList from './image-list'
import { fetchMatchingImages } from '../services/api'

const AppContainer = styled.div`
  margin-top: 10px;
`

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
    }
  }

  onSearchSubmit = async (searchInput) => {
    const response = await fetchMatchingImages(searchInput)
    this.setState({
      images: response,
    })
  }

  render() {
    return (
      <AppContainer className="ui container">
        <SearchBar onSubmitForm={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </AppContainer>
    )
  }
}

export default App
