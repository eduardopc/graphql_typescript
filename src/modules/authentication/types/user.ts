import 'reflect-metadata';
import { Field, InputType } from 'type-graphql';

// import { User } from '../entities/user';
// import Address from '../entities/address';

@InputType()
export class UserInput {
  @Field()
  identifier: string;

  // @Field(() => Address)
  // address: Address[];
} 