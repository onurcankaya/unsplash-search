import axios from 'axios'

const { REACT_APP_API_KEY } = process.env

const BASE_URL = 'https://api.unsplash.com/search/photos'

export const fetchMatchingImages = async (query = '') => {
  const q = query.length > 0 && query.toLowerCase()

  const response = await axios.get(BASE_URL, {
    params: {
      query,
    },
    headers: {
      Authorization: 'Client-ID ' + REACT_APP_API_KEY,
    },
  })

  console.log(q, response)
}
