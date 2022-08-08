import axios from 'axios'
import { apiHost, apiKey } from 'consts/apiKeys'

export const fetchDetails = async (id: string) => {
  console.log('Requesting for fetch')
  const response = await axios.get(
    // eslint-disable-next-line quotes
    `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${id}`,
    {
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost,
      },
    }
  )
  console.log('Fetch done with ' + JSON.stringify(response.data))
  return response.data
}
