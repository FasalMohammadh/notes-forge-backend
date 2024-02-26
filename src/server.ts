import express from "express";

import env from "./utils/validate-env.js";

import yoga from "./yoga/create-yoga.js";

const app = express();

app.use(yoga.graphqlEndpoint, yoga);

app.listen(env.PORT, () => {
  console.info(`Server running on port ${env.PORT}`);
});
