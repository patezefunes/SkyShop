import axios from 'axios'

export const fetchDetails = async () => {
  console.log('Requesting for fetch')
  const response = await axios.get('http://swapi.dev/api/planets/1/')
  return response.data
}
