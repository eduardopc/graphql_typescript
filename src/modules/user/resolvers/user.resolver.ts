import { Resolver, Arg, Query, Mutation } from "type-graphql";

import { User, UserModel } from "../entities/user";
import { UserInput } from "../types/user";
import { UserService } from "../service";

@Resolver()
export class UserResolver {
  private readonly service: UserService;

  constructor() {
    this.service = new UserService();
  }

  @Query(_returns => User, { nullable: false})
  async returnSingleUser(@Arg("identifier") identifier: string){
    return await UserModel.findOne({ identifier: identifier });
  };

  @Query(() => [User])
  async returnAllUsers(){
    return await UserModel.find();  
  };

  @Mutation(() => User)
  async createUser(@Arg("data")
  { 
    identifier, 
    address 
  }: UserInput): Promise<User> { 
    const user = await this.service.create({ identifier, address });

    return user;
  };

  @Mutation(() => Boolean)
  async deleteAllUsers() {
    await UserModel.deleteMany({});
    return true;
  }
}