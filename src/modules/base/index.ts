import { types } from "@typegoose/typegoose";

export class BaseService<T> {
  protected model: types.ModelType<T>;

  async find(selector: any) {
    return this.model.find(selector);
  }

  async findOneById(_id: any) {
    return this.model.findOne({ _id });
  }

  async create(data: any) {
    return this.model.create(data);
  }

  async removeById(_id: any) {
    let entityToRemove: any = await this.model.findOne(_id);
    await this.model.remove(entityToRemove);
  }

  async count(entity: any) {
    return this.model.count(entity);
  }
}