import { buildSchema } from 'type-graphql';
import path from 'path'; 

const schema = buildSchema({
    resolvers: [path.join(__dirname, './modules', `**/*.resolver.*s`)],
    validate: false,
});

export default schema; 