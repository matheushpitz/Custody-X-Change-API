import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env['APP_PORT'] || '8080';

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});

export default app;