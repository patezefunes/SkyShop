import axios from 'axios'
import { apiHost, apiKey } from 'consts/apiKeys'
import { useEffect, useState } from 'react'
import DetailsPage from './DetailsPage'

const Options = ({ countryId }) => {
  const [data, setData] = useState(null)

  console.log('Options response is ' + data)

  useEffect(() => {
    axios
      .get(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryId}`, {
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': apiHost,
        },
      })
      .then((response) => {
        setData(JSON.stringify(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [countryId])

  return <DetailsPage name={data} />
}

export default Options
