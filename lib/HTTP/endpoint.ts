export const ENDPOINTS = {
  SIGN_UP: 'signup',
  LOGIN: 'login',
  GRAPHQL: 'graphql'
} as const

export type ApiEndpoint = typeof ENDPOINTS[keyof typeof ENDPOINTS]