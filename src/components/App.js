import React from 'react'
import styled from 'styled-components'

import SearchBar from './search-bar'

const AppContainer = styled.div`
  margin-top: 10px;
`

function App() {
  return (
    <AppContainer className="ui container">
      <SearchBar />
    </AppContainer>
  )
}

export default App
