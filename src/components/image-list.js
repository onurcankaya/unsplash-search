import React from 'react'
import styled from 'styled-components'

import ImageCard from './image'

const ImageListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 0 50px;
  grid-auto-rows: 10px;
`

class ImageList extends React.PureComponent {
  render() {
    const { images } = this.props

    return (
      <ImageListContainer>
        {images &&
          images.map((image) => (
            <ImageCard key={image.id} url={image.url} alt={image.alt} />
          ))}
      </ImageListContainer>
    )
  }
}

export default ImageList
