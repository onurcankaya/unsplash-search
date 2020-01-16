import React from 'react'
import styled from 'styled-components'

import ImageCard from './image'

const ImageListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 10px;
`
const NoResult = styled.div`
  padding: 20px 10px;
  font-size: 16px;
`

class ImageList extends React.PureComponent {
  render() {
    const { images } = this.props

    console.log(images)

    return (
      <ImageListContainer>
        {images.length > 0 ? (
          images.map((image) => <ImageCard key={image.id} url={image.url} alt={image.alt} />)
        ) : (
          <NoResult>No images to show yet...</NoResult>
        )}
      </ImageListContainer>
    )
  }
}

export default ImageList
