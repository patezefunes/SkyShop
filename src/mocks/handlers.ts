import { rest } from 'msw'

export const handlers = [
  rest.get(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${'Q414'}`,
    (req, res, ctx) => {
      const data = {
        name: 'Argentina',
        capital: 'Buenos Aires',
      }
      console.log('Handler called with ' + ctx)
      return res(ctx.json(data))
    }
  ),
]
