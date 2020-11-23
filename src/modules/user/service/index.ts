import { BaseService } from "../../base";
import { User, UserModel } from "../entities/user";

export class UserService extends BaseService<User> {
  constructor() {
    super();
    this.model = UserModel;
  }
}