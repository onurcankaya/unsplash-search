import axios from 'axios'

const BASE_URL = 'https://api.unsplash.com/search/photos'
const API_KEY = process.env.REACT_APP_API_KEY

export const fetchMatchingImages = async (query = '') => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  })

  const { results } = response.data
  const mappedResults =
    results &&
    results.map((result) => {
      return {
        id: result.id,
        url: result.urls.regular,
        alt: result.alt_description,
        createdAt: result.created_at,
      }
    })

  return mappedResults
}
