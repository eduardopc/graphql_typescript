import { Field, ObjectType, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

// import { Ref } from "../../../types";
// import Address from './address';

@ObjectType({ description: "The User Model" })
export class User {
  @Field(() => ID)
  readonly id: string;

  @Field()
  @Property({ required: true })
  identifier: string;

  // @Field(() => [Address])
  // @Property({ref: Address, required: true })
  // address: Ref<[Address]>;

  // @Field(() => Date)
  // @Property({ default: new Date(), required: true })
  // createdAt: Date;

  // @Field(() => Date)
  // @Property({ default: new Date(), required: true })
  // updatedAt: Date;
}

export const UserModel = getModelForClass(User);