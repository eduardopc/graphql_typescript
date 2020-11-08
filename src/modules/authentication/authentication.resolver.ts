import { Query, Resolver, Arg } from "type-graphql";
import User from "./types/user";
import GetAddress from "./types/input/getUserAddress";

@Resolver(User)
export class SignInResolver {
  @Query(() => User)
  async address(@Arg("params") params: GetAddress) {

  }
}