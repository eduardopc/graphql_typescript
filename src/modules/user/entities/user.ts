import { Field, ObjectType, ID } from 'type-graphql';
import { prop as Property, pre, getModelForClass } from '@typegoose/typegoose';

// import { Ref } from "../../../types";
import { Address } from './address';

@pre<User>('save', function (next) {
  if (!this.createdAt || this.isNew) {
    this.createdAt = this.updatedAt = new Date()
  } else {
    this.updatedAt = new Date()
  }
  next()
})

@ObjectType({ description: "The User Model" })
export class User {
  @Field(() => ID)
  readonly id: string;

  @Field()
  @Property({ required: true })
  identifier: string;

  @Field(() => [Address])
  @Property({ type: Address, required: true, _id: false })
  address: Address[];

  @Property()
  @Field(() => Date)
  createdAt: Date;

  @Property()
  @Field(() => Date)
  updatedAt: Date;
}

export const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true }
});