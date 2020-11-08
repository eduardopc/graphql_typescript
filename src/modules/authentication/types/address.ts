import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
class Address {
  @Field()
  street: string;

  @Field(() => Int)
  number: number;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  zipCode: string;

  @Field({ nullable: true })
  complement: string;
}

export default Address;
