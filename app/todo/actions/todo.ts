'use server';

import { gql } from 'urql';

import { GraphQLResponse, GraphQLResponseSchema } from '@/app/todo/types';
import { urqlClient } from '@/lib/client/GraphQL/client';

export async function getTodos() {
  try {
    const client = await urqlClient();
    const todoQuery = gql<GraphQLResponse>`
      Query {
        todos {
          items {
            id,
            title,
            status,
            description
          }
        }
      }
    `;
    const result = await client.query(todoQuery, {}).toPromise();
    console.log('Graph レスポンス', result.data);

    const parsedResponse = GraphQLResponseSchema.safeParse(result.data)

    if (!parsedResponse.success) {
      throw new Error('GraphQL response validation failed');
    }
    
    return parsedResponse.data.todos.items;

  } catch (e) {
    console.error(e);
    throw new Error(`GraphQL Request Error: ${e}`);
  }
}
