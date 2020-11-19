import 'reflect-metadata';
import { Field, Int, ObjectType } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: "The Address model" })
class Address {
  @Field()
  @Property({ required: true })
  street: string;

  @Field(() => Int)
  @Property({ required: true })
  number: number;

  @Field()
  @Property({ required: true })
  city: string;

  @Field()
  @Property({ required: true })
  state: string;

  @Field()
  @Property({ required: true })
  zipCode: string;

  @Field({ nullable: true })
  complement: string;
}

export default Address;
