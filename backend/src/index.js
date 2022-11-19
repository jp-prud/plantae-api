import express from 'express';
import 'express-async-errors';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import cors from './app/middlewares/cors';
import errorHandler from './app/middlewares/errorHandler';
import routes from './routes';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () =>
  console.log('🔥 Server is running on http://localhost:3001'),
);
