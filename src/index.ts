import 'reflect-metadata';
import { GraphQLServer } from "graphql-yoga";

import schema from './schema';

async function bootstrap() {
  const server = new GraphQLServer({
    schema: await schema,
  });

  return server;
}

export default bootstrap;