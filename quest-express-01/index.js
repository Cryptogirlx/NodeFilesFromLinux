const express = require('express');
const userRoutes = require('./routes/users');
const app = express();

const port = 8000;

const users = {
  id: 1,
  name:"user1"
}

app.get("/", (request, response) => {
  console.log(request);
  response.send("Welcome to Express");
});

app.get("/users/:id", (request, response) => {
  response.send(`welcome user ${request.params.id}`);
});


app.listen(port, () => {
  console.log(`server is running on ${port}`);
})
