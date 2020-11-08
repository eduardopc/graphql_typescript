import { Field, InputType } from 'type-graphql';

@InputType()
class GetAddress {
  @Field()
  identifier: string;
}

export default GetAddress;