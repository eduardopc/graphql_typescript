import { Resolver, Arg, Query, Mutation } from "type-graphql";

import { User, UserModel } from "../entities/user";
import { UserInput } from "../types/user";

@Resolver()
export class UserResolver {
    @Query(_returns => User, { nullable: false})
    async returnSingleUser(@Arg("identifier") identifier: string){
      return await UserModel.findOne({ identifier: identifier });
    };

    @Query(() => [User])
    async returnAllUsers(){
      return await UserModel.find();
    };

    @Mutation(() => User)
    async createUser(@Arg("data"){ identifier, address }: UserInput): Promise<User> { 
      const user = (await UserModel.create({      
          identifier,
          address
      })).save();
      return user;
    };

    @Mutation(() => Boolean)
    async deleteAllUsers() {
     await UserModel.deleteMany({});
     return true;
   }
}