import { Field, InputType } from 'type-graphql';

import { User } from '../entities/user';
import { AddressInput } from './address';

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  identifier: string; 

  @Field(() => [AddressInput])
  address: AddressInput[];
} 