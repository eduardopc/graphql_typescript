import 'reflect-metadata';
import { GraphQLServer } from "graphql-yoga";
import { buildTypeDefsAndResolvers } from "type-graphql";
import { makeExecutableSchema } from "graphql-tools";
import path from 'path';

async function bootstrap() {
  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    resolvers: [path.join(__dirname, './modules', `**/*.resolver.*s`)],
  })

  const schema: any = makeExecutableSchema({ typeDefs, resolvers });

  const server = new GraphQLServer({
    schema,
  });

  return server;
}

export default bootstrap;