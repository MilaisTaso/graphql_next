import { initUrqlClient } from 'next-urql';
import {
  Client,
  ClientOptions,
  debugExchange,
  fetchExchange,
  cacheExchange,
} from 'urql';

import { auth, } from '@/auth';

import { env } from '@/env/server';

const GRAPHQL_ENDPOINT = env.GRAPHQL_URL!;

const clientOptions: ClientOptions = {
  url: GRAPHQL_ENDPOINT,
  exchanges: [debugExchange, fetchExchange, cacheExchange],
  suspense: true,
};

export async function urqlClient(): Promise<Client> {
  const session = await auth();
  const headers = session?.token
  return new Promise((resolve, reject) => {
    const client = initUrqlClient(clientOptions, false);
    if (!client) {
      reject(Error('Failed to init initUrqlClient.'));
    } else {
      resolve(client);
    }
  });
}
