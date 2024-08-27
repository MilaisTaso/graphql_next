import ky, { HTTPError } from 'ky';

import { env } from '@/env/server';
import { ENDPOINTS, type ApiEndpoint } from '@/lib/HTTP/endpoint';

class HttpClient {
  constructor(
    private baseUrl: string = env.API_URL,
    
  ) {}

  private url(endpoint: ApiEndpoint) {
    return `${this.baseUrl}/${endpoint}`;
  }

  private nonAuthorizeEndPoints = Object.values(ENDPOINTS)
    .filter((value) => value !== ENDPOINTS.GRAPHQL)
    .map((value) => this.url(value));

  private api = ky.extend({
    hooks: {},
  });

  public async post<T>(endpoint: ApiEndpoint, body: any) {
    try {
      const response = await this.api.post(
       this.url(endpoint),
       {
        json: body
       }
      )

      if (response.status != 200) throw new Error(`HTTP Request Error status: ${response.status}`)
      
      return response.json<T>();
  
    } catch (err) {
      if (err instanceof HTTPError) {
        throw err;
      } else {
        throw new Error(`Unexpected Error detail: ${err}`)
      }
    }
  }
}

export const client = new HttpClient()
