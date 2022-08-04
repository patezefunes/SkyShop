export interface DetailState {
  detailResponse: RequestDetailResponse
  detailError: DetailError
  loading: boolean
}

export interface RequestDetailResponse {
  name: string
  climate: string
  population: string
}

export interface DetailError {
  name: string
  message: string
}

export type DetailReturnType = Error | RequestDetailResponse
