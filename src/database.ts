import mongoose from "mongoose";

import { DB_CONNECTION_STRING } from './envs';

export default class DatabaseBootstrap {
  DBURI: string;
  constructor() {
    this.DBURI = DB_CONNECTION_STRING;
  }

  public async bootstrap(): Promise<void> {
    try {
        await mongoose.connect(
            this.DBURI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );
        console.error('Database connected successfully');
    } catch (err) {
        console.error('Unable to connect to the database. Error:', err);
    }
  }
}