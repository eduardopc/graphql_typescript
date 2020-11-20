import "dotenv/config";

import app from "./index";
import DatabaseBootstrap from './database';

app().then((server) =>
  server.start(() => {
    new DatabaseBootstrap().bootstrap();
    console.log("Server is running on http://localhost:4000"); 
  })
);