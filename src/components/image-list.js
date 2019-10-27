import React from 'react'
import styled from 'styled-components'

import Image from './image'

const ImageListContainer = styled.div``

class ImageList extends React.PureComponent {
  render() {
    const { images } = this.props

    return (
      <ImageListContainer>
        {images.map((image) => (
          <Image key={image.id} url={image.url} alt={image.alt} />
        ))}
      </ImageListContainer>
    )
  }
}

export default ImageList
