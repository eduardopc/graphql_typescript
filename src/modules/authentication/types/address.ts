import { Field, Int, InputType } from 'type-graphql';

@InputType()
export class AddressInput {
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