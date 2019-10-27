import axios from 'axios'

const { REACT_APP_API_KEY } = process.env

const BASE_URL = 'https://api.unsplash.com/search/photos'

export const fetchMatchingImages = async (query = '') => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
    },
    headers: {
      Authorization: `Client-ID ${REACT_APP_API_KEY}`,
    },
  })

  const { results } = response.data

  const mappedResults = results.map((result) => {
    return {
      result: {
        id: result.id,
        url: result.urls.regular,
        alt: result.alt_description,
        createdAt: result.created_at,
      },
    }
  })

  return mappedResults
}
