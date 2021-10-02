import express from 'express';
import routes from './routes';
import { config } from './app.config';

const app = express();

const port = process.env['APP_PORT'] || '8080';

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});

config(app);
routes(app);

export default app;