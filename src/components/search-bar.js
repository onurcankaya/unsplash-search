import React from 'react'
import styled from 'styled-components'

const SearchBarContainer = styled.div``
const SearchBarForm = styled.form``
const SearchInputWrapper = styled.div``
const SearchInputLabel = styled.label``
const SearchInput = styled.input`
  width: 200px;
  height: 40px;
  padding: 0 10px;
`

class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
    }
  }

  onInputChange = (e) => {
    const searchInput = e.target.value
    this.setState({
      searchInput,
    })
  }

  onSubmitForm = (e) => {
    e.preventDefault()
    this.props.onSubmitForm(this.state.searchInput)
  }

  render() {
    return (
      <SearchBarContainer className="ui segment">
        <SearchBarForm onSubmit={this.onSubmitForm} className="ui form">
          <SearchInputWrapper className="field">
            <SearchInputLabel>Image Search</SearchInputLabel>
            <SearchInput
              onChange={this.onInputChange}
              value={this.state.searchInput}
            />
          </SearchInputWrapper>
        </SearchBarForm>
      </SearchBarContainer>
    )
  }
}

export default SearchBar
