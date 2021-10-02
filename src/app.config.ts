import dotenv from 'dotenv';
import cors from 'cors';

export function config(app: any) {
    dotenv.config();

    app.use(cors());
}