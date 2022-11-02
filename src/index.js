const express = require("express");
require("express-async-errors");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

const cors = require("./app/middlewares/cors");
const errorHandler = require("./app/middlewares/errorHandler");
const routes = require("./routes");

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () =>
  console.log("🔥 Server is running on http://localhost:3001")
);
