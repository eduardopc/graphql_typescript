import { Field, ObjectType } from 'type-graphql';

import Address from './address';

@ObjectType()
class User {
  @Field()
  identifier: string;

  @Field(() => [Address])
  address: [Address];
}

export default User;