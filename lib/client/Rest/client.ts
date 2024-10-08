import ky, { HTTPError } from 'ky';

import { env } from '@/env/server';
import { ENDPOINTS, type ApiEndpoint } from '@/lib/client/Rest/endpoint';

class HttpClient {
  constructor(private baseUrl: string = env.API_URL) {}

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
      const response = await this.api.post(this.url(endpoint), {
        json: body,
      });

      if (response.status != 200)
        throw new Error(`HTTP Request Error status: ${response.status}`);

      const data = await response.json<T>();
      console.log('client.ts レスポンス:', data);

      return data;
    } catch (err) {
      console.log('http client error', err);
      if (err instanceof HTTPError) {
        throw err;
      } else {
        console.log('unexpected error', err);
        throw new Error(`Un expected Error. detail: ${err}`);
      }
    }
  }
}

export const client = new HttpClient();
