import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div``
const Img = styled.img`
  width: 400px;
  height: auto;
`

const Image = ({ id, url, alt }) => (
  <ImageContainer key={id}>
    <Img src={url} alt={alt} />
  </ImageContainer>
)

export default Image
