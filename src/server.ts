import app from "./index";

app().then((server) =>
  server.start(() => {
    console.log("Server is running on http://localhost:4000"); 
  })
);