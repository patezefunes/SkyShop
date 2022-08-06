export interface DetailState {
  detailResponse: RequestDetailResponse
  detailError: DetailError
  loading: boolean
}

export interface RequestDetailResponse {
  capital: string
  name: string
  flagImageUri: string
}

export interface DetailError {
  name: string
  message: string
}

export type CountryId = string

export type DetailReturnType = Error | RequestDetailResponse
