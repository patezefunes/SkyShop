import { rest } from 'msw'

export const handlers = [
  rest.get(
    'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/Q414',
    (req, res, ctx) => {
      return res(
        ctx.json({
          capital: 'Buenos Aires',
          flagImageUri:
            'http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Argentina.svg',
          name: 'Argentina',
        })
      )
    }
  ),
]
