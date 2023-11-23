import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosInstance
} from 'axios'
import { z } from 'zod'
import { client } from '@/utils/env'

export const AXIOS_TIMEOUT = 10000
const AXIOS_CONFIG_DEFAULTS = {
  timeout: AXIOS_TIMEOUT,
  headers: {
    Accept: 'application/json'
  }
}

export const AXIOS_BASE_CLIENT = axios.create(AXIOS_CONFIG_DEFAULTS)
export const AXIOS_PINATA_CLIENT = axios.create({
  ...AXIOS_CONFIG_DEFAULTS,
  baseURL: client.NEXT_PUBLIC_PINATA_API_URL
})

type SchemaParams<TReq extends z.ZodTypeAny, TRes extends z.ZodTypeAny> = {
  reqSchema: TReq
  resSchema: TRes
}
type HTTPMethod = 'get' | 'post' | 'put' | 'delete' | 'patch'
type RequestParams<T> = {
  method: HTTPMethod
  url: string
  req: T
  config?: AxiosRequestConfig<T>
  axiosClient: ApiAxiosClient
}
type MockParams<T> = {
  shouldReject?: boolean
  mockData: T
  timeout?: number
  errorMessage?: string
}
type ApiAxiosClient = 'basic' | 'pinata'

export const request = async <
  TReq extends z.ZodTypeAny,
  TRes extends z.ZodTypeAny
>(
  schemaParams: SchemaParams<TReq, TRes>,
  params: RequestParams<z.infer<TReq>>,
  mockParams?: MockParams<z.infer<TRes>>
): Promise<z.infer<TRes>> => {
  try {
    schemaParams.reqSchema.parse(params.req)

    if (mockParams) {
      return await fetchMockData(mockParams)
    }

    const apiClient = API_CLIENTS[params.axiosClient]

    const response = await axiosFetch<z.infer<TReq>, z.infer<TRes>>(
      params,
      apiClient
    )

    return await schemaParams.resSchema.parse(response.data)
  } catch (error) {
    throw error
  }
}

export const fetchMockData = <T>({
  mockData,
  shouldReject = false,
  timeout = 1000,
  errorMessage
}: MockParams<T>): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        return reject(new Error(errorMessage || 'Fetch mock error'))
      }

      resolve(mockData)
    }, timeout)
  })

export const isMethodWithoutBody = (method: HTTPMethod) =>
  method === 'get' || method === 'delete'

const axiosFetch = <TReq, TRes>(
  params: RequestParams<TReq>,
  client: AxiosInstance
) => {
  const fetch = isMethodWithoutBody(params.method)
    ? client[params.method]<TReq, AxiosResponse<TRes, TReq>>(params.url, {
        params: params.req,
        ...params.config
      })
    : client[params.method]<TReq, AxiosResponse<TRes, TReq>>(
        params.url,
        params.req,
        params.config
      )

  return fetch
}

const API_CLIENTS: Record<ApiAxiosClient, AxiosInstance> = {
  basic: AXIOS_BASE_CLIENT,
  pinata: AXIOS_PINATA_CLIENT
}

AXIOS_PINATA_CLIENT.interceptors.request.use(req => {
  req = req || {}
  req.headers = req.headers || {}

  req.headers.Authorization = `Bearer ${client.NEXT_PUBLIC_PINATA_API_KEY}`

  return req
})
