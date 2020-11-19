import "dotenv/config";

import app from "./index";
import DatabaseBootstrap from './database';

new DatabaseBootstrap().bootstrap();

app().then((server) =>
  server.start(() => {
    console.log("Server is running on http://localhost:4000"); 
  })
);