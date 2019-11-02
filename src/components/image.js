import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  grid-row-end: ${(props) => `span ${props.spans}`};
  display: flex;
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
  width: 250px;
  grid-row-end: span 2;
`

class ImageCard extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { spans: 0 }

    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)

    this.setState({ spans })
  }

  render() {
    const { id, url, alt } = this.props

    return (
      <ImageContainer key={id} spans={this.state.spans}>
        <Image ref={this.imageRef} src={url} alt={alt} />
      </ImageContainer>
    )
  }
}

export default ImageCard
