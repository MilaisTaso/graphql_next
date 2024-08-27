import { env } from "@/env/server";
import ky from "ky";
import { ENDPOINTS, type ApiEndpoint } from "@/lib/HTTP/endpoint";
import { auth } from "@/auth";

const NON_AUTHORIZE_ENDPOINTS = ENDPOINTS

class HttpClient {
  constructor(
    private baseUrl : string = env.API_URL,
  ) {}

  private url(endpoint: ApiEndpoint) {
    return `${this.baseUrl}/${endpoint}`
  }

  private nonAuthorizeEndPoints = Object.values(ENDPOINTS)
    .filter(value => value !== ENDPOINTS.GRAPHQL)
    .map(value => this.url(value))

  private api = ky.extend({
    hooks: {
      beforeRequest: [
        
        request => {
          if (!this.nonAuthorizeEndPoints.includes(request.url)) {
            request.headers.set('Authorization','aaa' )
          }
        }
      ]
    }
  })
}