const app = require("./");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const options = {
  swaggerOptions: {
    validatorUrl: null,
  },
};

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options)
);

app.listen(3333);
